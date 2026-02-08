"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import { useParams } from "next/navigation";

export default function AssignmentEditorForm({
    cid,
    aid,
}: {
    cid: string;
    aid: string;
}) {
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group className="mb-3" controlId="wd-name">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="wd-description">
                    <Form.Control as="textarea" rows={3} defaultValue="The assignment is available online..." />
                </Form.Group>
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <Form.Label htmlFor="wd-points">Points</Form.Label>
                    </div>
                    <div className="col-md-8">
                        <Form.Control id="wd-points" type="number" defaultValue={100} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
                    </div>
                    <div className="col-md-8">
                        <Form.Select id="wd-group">
                            <option value="ASSIGNMENTS">Assignments</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
                    </div>
                    <div className="col-md-8">
                        <Form.Select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <Form.Label>Submission Type</Form.Label>
                    </div>
                    <div className="col-md-8 border p-3 rounded-2">
                        <Form.Group className="mb-3" controlId="wd-submission-type">
                            <Form.Select>
                                <option value="ONLINE">Online</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                        <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" className="mb-2" />
                        <Form.Check type="checkbox" label="Website URL" id="wd-website-url" className="mb-2" />
                        <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" className="mb-2" />
                        <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" className="mb-2" />
                        <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" className="mb-2" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <Form.Label>Assign</Form.Label>
                    </div>
                    <div className="col-md-8 border p-3 rounded-2">
                        <Form.Label className="fw-bold" htmlFor="wd-assign-to">Assign to</Form.Label>
                        <Form.Control type="text" id="wd-assign-to" defaultValue="Everyone" className="mb-3" />

                        <Form.Label className="fw-bold" htmlFor="wd-due-date">Due</Form.Label>
                        <Form.Control type="date" id="wd-due-date" defaultValue="2024-05-13" className="mb-3" />

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label className="fw-bold" htmlFor="wd-available-from">Available from</Form.Label>
                                <Form.Control type="date" id="wd-available-from" defaultValue="2024-05-06" />
                            </div>
                            <div className="col-md-6">
                                <Form.Label className="fw-bold" htmlFor="wd-available-until">Until</Form.Label>
                                <Form.Control type="date" id="wd-available-until" defaultValue="2024-05-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
            <hr />
            <div className="text-end">
                <Link href={`/kambaz/courses/${cid}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
                <Link href={`/kambaz/courses/${cid}/assignments`} className="btn btn-danger">Save</Link>
            </div>
        </div>
    );
}
