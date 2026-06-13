/**
 * Two-rate fare table (Route / Dzire / Ertiga) with a navy header row and
 * zebra striping, matching the One Way & Round Trip tables in the design.
 */
const FareTable = ({ rows }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-navy text-white">
            <th className="px-4 py-3 font-semibold">Route</th>
            <th className="px-4 py-3 text-center font-semibold">Dzire (₹)</th>
            <th className="px-4 py-3 text-center font-semibold">Ertiga (₹)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.route + i}
              className={`border-t border-slate-200 ${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
            >
              <td className="px-4 py-3 text-slate-700">{row.route}</td>
              <td className="px-4 py-3 text-center font-medium text-slate-800">{row.dzire}</td>
              <td className="px-4 py-3 text-center font-medium text-slate-800">{row.ertiga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FareTable
