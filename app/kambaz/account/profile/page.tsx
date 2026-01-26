import Link from "next/link";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value="matthew" placeholder="username" className="wd-username" /> <br />
            <input id="wd-password" value="123" placeholder="password" type="password" className="wd-password" /> <br />
            <input id="wd-firstname" value="Matthew" placeholder="First Name" className="wd-firstname" /> <br />
            <input id="wd-lastname" value="Hu" placeholder="Last Name" className="wd-lastname" /> <br />
            <input id="wd-dob" value="2000-01-01" type="date" className="wd-dob" /> <br />
            <input id="wd-email" value="matthew@hu.com" type="email" className="wd-email" /> <br />
            <select id="wd-role" className="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select> <br />
            <Link href="/kambaz/account/signin" id="wd-signout-btn">
                Sign out
            </Link>
        </div>
    );
}
