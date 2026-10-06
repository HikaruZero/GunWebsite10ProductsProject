type Props = { title: string; note?: string; rows: [string, string][] }

export default function SpecTable({ title, note, rows }: Props) {
  return (
    <div className="spec">
      <h3>{title}</h3>
      {note && <p className="spec-note">{note}</p>}
      <dl>
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
