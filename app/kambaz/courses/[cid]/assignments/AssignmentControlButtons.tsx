import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
                <BsPlus className="fs-4" /> Group
            </button>
            <button id="wd-add-assignment" className="btn btn-danger">
                <BsPlus className="fs-4" /> Assignment
            </button>
        </div>
    );
}
