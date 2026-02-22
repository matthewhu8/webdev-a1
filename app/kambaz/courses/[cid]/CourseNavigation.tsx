"use client"
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function CourseNavigation() {
    const { cid } = useParams();
    const pathname = usePathname();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-course-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link key={link} href={`/kambaz/courses/${cid}/${link.toLowerCase()}`}
                    id={`wd-course-${link.toLowerCase()}-link`}
                    className={`list-group-item border border-0
                        ${pathname.includes(link.toLowerCase()) ? "active text-dark" : "text-danger"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
