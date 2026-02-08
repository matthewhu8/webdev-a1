import Link from "next/link";

export default function TOC() {
    return (
        <ul>
            <li><Link href="/Labs">Labs</Link></li>
            <li><Link href="/Labs/lab1">Lab 1</Link></li>
            <li><Link href="/Labs/lab2">Lab 2</Link></li>
            <li><Link href="/kambaz">Kambaz</Link></li>
            <li><Link href="https://github.com/matthewhu8/webdev-a1-matthewhu" id="wd-github">GitHub</Link></li>
        </ul>
    );
}
