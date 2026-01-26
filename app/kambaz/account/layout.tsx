import Link from "next/link";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div id="wd-account-screen">
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <div id="wd-account-navigation">
                                <Link href="/kambaz/account/signin" id="wd-account-signin-link">Sign in</Link><br />
                                <Link href="/kambaz/account/signup" id="wd-account-signup-link">Sign up</Link><br />
                                <Link href="/kambaz/account/profile" id="wd-account-profile-link">Profile</Link><br />
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
