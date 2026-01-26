import Link from "next/link";

export default async function Assignments({
    params,
}: {
    params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment" placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link
                        className="wd-assignment-link"
                        href={`/kambaz/courses/${cid}/assignments/1`}
                    >
                        A1 - ENV + HTML
                    </Link><br />
                    <span>
                        Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |
                        <strong> Due</strong> May 13 at 11:59pm | 100 pts
                    </span>
                </li>
                <li className="wd-assignment-list-item">
                    <Link
                        className="wd-assignment-link"
                        href={`/kambaz/courses/${cid}/assignments/2`}
                    >
                        A2 - CSS + REACT
                    </Link><br />
                    <span>
                        Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |
                        <strong> Due</strong> May 20 at 11:59pm | 100 pts
                    </span>
                </li>
                <li className="wd-assignment-list-item">
                    <Link
                        className="wd-assignment-link"
                        href={`/kambaz/courses/${cid}/assignments/3`}
                    >
                        A3 - JS + REACT
                    </Link><br />
                    <span>
                        Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |
                        <strong> Due</strong> May 27 at 11:59pm | 100 pts
                    </span>
                </li>
            </ul>
        </div>
    );
}
