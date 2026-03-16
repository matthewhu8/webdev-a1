"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import LessonControlButtons from "../modules/LessonControlButtons";
import Link from "next/link";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment } from "../../assignments/reducer";
import { Modal, Button } from "react-bootstrap";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

    const handleDeleteClick = (assignment: any) => {
        setAssignmentToDelete(assignment);
        setShowDialog(true);
    };
    const handleConfirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete._id));
        }
        setShowDialog(false);
        setAssignmentToDelete(null);
    };
    const handleCancelDelete = () => {
        setShowDialog(false);
        setAssignmentToDelete(null);
    };

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
                <AssignmentControlButtons cid={cid as string} />
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
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <BsGripVertical className="me-2 fs-3 text-secondary" />
                                        </div>
                                        <div className="col-auto">
                                            <MdOutlineAssignment className="fs-3 text-success" />
                                        </div>
                                        <div className="col flex-grow-1">
                                            <Link className="wd-assignment-link fw-bold text-black text-decoration-none"
                                                href={`/kambaz/courses/${cid}/assignments/${assignment._id}`}>
                                                {assignment.title}
                                            </Link>
                                            <br />
                                            <span className="text-danger">Multiple Modules</span> |
                                            <strong> Not available until</strong> {assignment.availableDate} |
                                            <br />
                                            <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                                        </div>
                                        <div className="col-auto">
                                            <FaTrash className="text-danger me-2 mb-1 cursor-pointer"
                                                onClick={() => handleDeleteClick(assignment)} />
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>

            <Modal show={showDialog} onHide={handleCancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to remove the assignment &quot;{assignmentToDelete?.title}&quot;?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>No</Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
