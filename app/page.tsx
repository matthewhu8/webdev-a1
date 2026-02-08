import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Web Dev</h1>
      <h2>Matthew Hu - Section 01</h2>
      <Link href="https://github.com/matthewhu8/webdev-a1-matthewhu" id="wd-github">GitHub Repository</Link>
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
