import Link from "next/link";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input id="wd-username" placeholder="username" className="wd-username" /> <br />
            <input id="wd-password" type="password" placeholder="password" className="wd-password" /> <br />

            <Link href="/kambaz/dashboard" id="wd-signin-btn">
                Sign in
            </Link> <br />

            <Link href="/kambaz/account/signup" id="wd-signup-link">
                Sign up
            </Link>
        </div>
    );
}
