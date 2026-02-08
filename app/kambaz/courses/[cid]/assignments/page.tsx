import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import LessonControlButtons from "../modules/LessonControlButtons";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import Link from "next/link";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group" style={{ maxWidth: "300px" }}>
                    <span className="input-group-text bg-white border-end-0">
                        <FaMagnifyingGlass className="text-secondary" />
                    </span>
                    <input id="wd-search-assignment" className="form-control border-start-0"
                        placeholder="Search for Assignment" />
                </div>
                <AssignmentControlButtons />
            </div>
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary text-white">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <span className="float-end">
                            <span className="border border-dark rounded-pill px-2 py-1 fs-6 me-2">
                                40% of Total
                            </span>
                            <BsPlus className="fs-4" />
                            <IoEllipsisVertical className="fs-4" />
                        </span>
                    </div>
                    <ul className="wd-assignment-list-group list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="me-2 fs-3 text-secondary" />
                                </div>
                                <div className="col-auto">
                                    <MdOutlineAssignment className="fs-3 text-success" />
                                </div>
                                <div className="col flex-grow-1">
                                    <Link className="wd-assignment-link fw-bold text-black text-decoration-none"
                                        href="/kambaz/courses/1234/assignments/123">
                                        A1 - ENV + HTML
                                    </Link>
                                    <br />
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong> Not available until</strong> May 6 at 12:00am |
                                    <br />
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </div>
                                <div className="col-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="me-2 fs-3 text-secondary" />
                                </div>
                                <div className="col-auto">
                                    <MdOutlineAssignment className="fs-3 text-success" />
                                </div>
                                <div className="col flex-grow-1">
                                    <Link className="wd-assignment-link fw-bold text-black text-decoration-none"
                                        href="/kambaz/courses/1234/assignments/124">
                                        A2 - CSS + BOOTSTRAP
                                    </Link>
                                    <br />
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong> Not available until</strong> May 13 at 12:00am |
                                    <br />
                                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                                </div>
                                <div className="col-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="me-2 fs-3 text-secondary" />
                                </div>
                                <div className="col-auto">
                                    <MdOutlineAssignment className="fs-3 text-success" />
                                </div>
                                <div className="col flex-grow-1">
                                    <Link className="wd-assignment-link fw-bold text-black text-decoration-none"
                                        href="/kambaz/courses/1234/assignments/125">
                                        A3 - JS + REACT
                                    </Link>
                                    <br />
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong> Not available until</strong> May 20 at 12:00am |
                                    <br />
                                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                                </div>
                                <div className="col-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
