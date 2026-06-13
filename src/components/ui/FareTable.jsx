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
            <th className="px-4 py-3 text-center font-semibold">
              <div className="leading-tight">
                <div>Dzire</div>
                <div className="text-[11px] font-normal text-slate-300 mt-0.5 whitespace-nowrap">(Sedan)</div>
              </div>
            </th>
            <th className="px-4 py-3 text-center font-semibold">
              <div className="leading-tight">
                <div>Ertiga</div>
                <div className="text-[11px] font-normal text-slate-300 mt-0.5 whitespace-nowrap">(SUV)</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.route + i}
              className={`border-t border-slate-200 ${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
            >
              <td className="px-4 py-3 text-slate-700">{row.route}</td>
              <td className="px-4 py-3 text-center font-bold text-navy">₹{row.dzire}</td>
              <td className="px-4 py-3 text-center font-bold text-navy">₹{row.ertiga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FareTable
