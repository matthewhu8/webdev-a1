"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../../../assignments/reducer";

export default function AssignmentEditorForm({
    cid,
    aid,
}: {
    cid: string;
    aid: string;
}) {
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const router = useRouter();
    const isNew = aid === "new";
    const existingAssignment = assignments.find((a: any) => a._id === aid);

    const [assignment, setAssignment] = useState<any>(
        isNew
            ? {
                  title: "New Assignment",
                  description: "New Assignment Description",
                  points: 100,
                  dueDate: "",
                  availableDate: "",
                  availableUntilDate: "",
                  course: cid,
              }
            : { ...existingAssignment }
    );

    const handleSave = () => {
        if (isNew) {
            dispatch(addAssignment(assignment));
        } else {
            dispatch(updateAssignment(assignment));
        }
        router.push(`/kambaz/courses/${cid}/assignments`);
    };

    const handleCancel = () => {
        router.push(`/kambaz/courses/${cid}/assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group className="mb-3" controlId="wd-name">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" value={assignment?.title || ""}
                        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="wd-description">
                    <Form.Control as="textarea" rows={3} value={assignment?.description || ""}
                        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
                </Form.Group>
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <Form.Label htmlFor="wd-points">Points</Form.Label>
                    </div>
                    <div className="col-md-8">
                        <Form.Control id="wd-points" type="number" value={assignment?.points || 100}
                            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <Form.Label>Assign</Form.Label>
                    </div>
                    <div className="col-md-8 border p-3 rounded-2">
                        <Form.Label className="fw-bold" htmlFor="wd-due-date">Due</Form.Label>
                        <Form.Control type="date" id="wd-due-date" value={assignment?.dueDate || ""} className="mb-3"
                            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label className="fw-bold" htmlFor="wd-available-from">Available from</Form.Label>
                                <Form.Control type="date" id="wd-available-from" value={assignment?.availableDate || ""}
                                    onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })} />
                            </div>
                            <div className="col-md-6">
                                <Form.Label className="fw-bold" htmlFor="wd-available-until">Until</Form.Label>
                                <Form.Control type="date" id="wd-available-until" value={assignment?.availableUntilDate || ""}
                                    onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
            <hr />
            <div className="text-end">
                <Button variant="secondary" className="me-2" onClick={handleCancel}>Cancel</Button>
                <Button variant="danger" onClick={handleSave}>Save</Button>
            </div>
        </div>
    );
}
