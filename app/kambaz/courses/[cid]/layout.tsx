import Link from "next/link";

export default async function CourseLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-course-layout">
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <div id="wd-course-navigation">
                                <Link href={`/kambaz/courses/${cid}/home`} id="wd-course-home-link">Home</Link><br />
                                <Link href={`/kambaz/courses/${cid}/modules`} id="wd-course-modules-link">Modules</Link><br />
                                <Link href={`/kambaz/courses/${cid}/piazza`} id="wd-course-piazza-link">Piazza</Link><br />
                                <Link href={`/kambaz/courses/${cid}/zoom`} id="wd-course-zoom-link">Zoom</Link><br />
                                <Link href={`/kambaz/courses/${cid}/assignments`} id="wd-course-assignments-link">Assignments</Link><br />
                                <Link href={`/kambaz/courses/${cid}/quizzes`} id="wd-course-quizzes-link">Quizzes</Link><br />
                                <Link href={`/kambaz/courses/${cid}/grades`} id="wd-course-grades-link">Grades</Link><br />
                                <Link href={`/kambaz/courses/${cid}/people`} id="wd-course-people-link">People</Link><br />
                            </div>
                        </td>
                        <td valign="top">
                            {children}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
