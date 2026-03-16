import { BsPlus } from "react-icons/bs";
import Link from "next/link";

export default function AssignmentControlButtons({ cid }: { cid: string }) {
    return (
        <div className="float-end">
            <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
                <BsPlus className="fs-4" /> Group
            </button>
            <Link href={`/kambaz/courses/${cid}/assignments/new`}>
                <button id="wd-add-assignment" className="btn btn-danger">
                    <BsPlus className="fs-4" /> Assignment
                </button>
            </Link>
        </div>
    );
}
