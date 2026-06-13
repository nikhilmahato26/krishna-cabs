import { useEffect, useState, useRef } from 'react'

let scriptLoading = false
let scriptLoaded = false
const scriptListeners = new Set()

/**
 * Custom hook to bind Google Places Autocomplete to an input field.
 * Handles dynamic script loading, single-instance loading, and callback references.
 */
export default function useGooglePlacesAutocomplete({
  inputRef,
  onPlaceSelected,
  options = {},
}) {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== 'undefined' &&
      !!(window.google && window.google.maps && window.google.maps.places)
  )
  const autocompleteRef = useRef(null)
  
  // Use a ref for callback and options to avoid re-running effect on every render
  const callbackRef = useRef(onPlaceSelected)
  const optionsRef = useRef(options)

  useEffect(() => {
    callbackRef.current = onPlaceSelected
  }, [onPlaceSelected])

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    if (!inputRef.current) return

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

    const initAutocomplete = () => {
      if (
        !inputRef.current ||
        !window.google ||
        !window.google.maps ||
        !window.google.maps.places ||
        autocompleteRef.current
      ) {
        return
      }

      const autocompleteOptions = {
        fields: ['address_components', 'formatted_address', 'geometry', 'name'],
        types: ['geocode', 'establishment'],
        ...optionsRef.current,
      }

      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        autocompleteOptions
      )

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (callbackRef.current) {
          callbackRef.current(place)
        }
      })

      autocompleteRef.current = autocomplete
    }

    // If script is already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      setIsLoaded(true)
      initAutocomplete()
      return
    }

    const handleScriptLoad = () => {
      setIsLoaded(true)
      initAutocomplete()
    }

    scriptListeners.add(handleScriptLoad)

    if (!scriptLoading && !scriptLoaded) {
      scriptLoading = true
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => {
        scriptLoaded = true
        scriptLoading = false
        scriptListeners.forEach((listener) => listener())
        scriptListeners.clear()
      }
      script.onerror = (err) => {
        scriptLoading = false
        console.error('Google Maps JavaScript API failed to load.', err)
      }
      document.head.appendChild(script)
    }

    return () => {
      scriptListeners.delete(handleScriptLoad)
      if (autocompleteRef.current) {
        // Clear Google Maps listeners
        if (window.google && window.google.maps && window.google.maps.event) {
          window.google.maps.event.clearInstanceListeners(autocompleteRef.current)
        }
        autocompleteRef.current = null
      }
    }
  }, [inputRef])

  return isLoaded
}
