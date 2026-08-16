export default function VerifiedStamp({
  label = "Verified · Raw Data",
  color = "stamp",
}: {
  label?: string;
  color?: "stamp" | "gold";
}) {
  return (
    <span className={color === "stamp" ? "stamp-magenta" : "stamp-gold"}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path
          d="M1.5 5.5L4 8L8.5 2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </span>
  );
}
