import Link from "next/link";

export default function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <p>Student Name: Matthew Hu</p>
            <p>Section: 01</p>
            <ul>
                <li>
                    <Link href="/Labs/lab1">Lab 1</Link>
                </li>
            </ul>
            <Link href="/">Back to Landing Page</Link>
        </div>
    );
}
