import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Web Dev</h1>
      <ul>
        <li>
          <Link href="/Labs">Labs</Link>
        </li>
        <li>
          <Link href="/kambaz">Kambaz Application</Link>
        </li>
      </ul>
    </div>
  );
}
