import type { StatRow } from "@/lib/case-studies";

export default function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: StatRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface/50 p-5">
      <table className="case-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={c}>{row[c]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
