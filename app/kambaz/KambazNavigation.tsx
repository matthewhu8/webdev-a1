
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
    return (
        <div id="wd-kambaz-navigation" style={{ width: 110 }}
            className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/neu.png" width="75px" />
            </a>
            <Link href="/kambaz/account" id="wd-account-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <FaRegCircleUser className="fs-1 text text-white" />
                <br />
                Account
            </Link>
            <Link href="/kambaz/dashboard" id="wd-dashboard-link"
                className="list-group-item text-center border-0
                   bg-white text-danger">
                <AiOutlineDashboard className="fs-1 text-danger" />
                <br />
                Dashboard
            </Link>
            <Link href="/kambaz/courses" id="wd-course-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <LiaBookSolid className="fs-1 text-danger" />
                <br />
                Courses
            </Link>
            <Link href="/kambaz/calendar" id="wd-calendar-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <IoCalendarOutline className="fs-1 text-danger" />
                <br />
                Calendar
            </Link>
            <Link href="/kambaz/inbox" id="wd-inbox-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <FaInbox className="fs-1 text-danger" />
                <br />
                Inbox
            </Link>
            <Link href="/Labs" id="wd-labs-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <LiaCogSolid className="fs-1 text-danger" />
                <br />
                Labs
            </Link>
        </div>
    );
}
