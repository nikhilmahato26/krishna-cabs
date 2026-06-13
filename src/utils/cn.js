/**
 * Tiny className joiner — filters out falsy values so conditional classes stay
 * readable without pulling in an extra dependency.
 *
 * @param  {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
