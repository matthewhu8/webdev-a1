import Link from "next/link";

export default function KambazLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div id="wd-kambaz">
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <div id="wd-kambaz-navigation">
                                <Link href="https://www.northeastern.edu" id="wd-neu-link">Northeastern</Link><br />
                                <Link href="/kambaz/account" id="wd-account-link">Account</Link><br />
                                <Link href="/kambaz/dashboard" id="wd-dashboard-link">Dashboard</Link><br />
                                <Link href="/kambaz/courses" id="wd-course-link">Courses</Link><br />
                                <Link href="/kambaz/calendar" id="wd-calendar-link">Calendar</Link><br />
                                <Link href="/kambaz/inbox" id="wd-inbox-link">Inbox</Link><br />
                                <Link href="/Labs" id="wd-labs-link">Labs</Link><br />
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
