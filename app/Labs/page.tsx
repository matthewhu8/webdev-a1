import Link from "next/link";
import TOC from "./TOC";

export default function Labs() {
    return (
        <div id="wd-labs">
            <TOC />
            <h1>Labs</h1>
            <p id="wd-name">Student Name: Matthew Hu</p>
            <p id="wd-section">Section: 01</p>
            <ul>
                <li>
                    <Link href="/Labs/lab1" id="wd-lab1-link">Lab 1</Link>
                </li>
                <li>
                    <Link href="/Labs/lab2" id="wd-lab2-link">Lab 2</Link>
                </li>
                <li>
                    <Link href="/Labs/lab3" id="wd-lab3-link">Lab 3</Link>
                </li>
            </ul>
            <Link href="https://github.com/matthewhu8/webdev-a1" id="wd-github" target="_blank">
                GitHub Repository
            </Link>
            <br />
            <Link href="/kambaz" id="wd-kambaz-app-link">
                Kambaz Application
            </Link>
        </div>
    );
}
