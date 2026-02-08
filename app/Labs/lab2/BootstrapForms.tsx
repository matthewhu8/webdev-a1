"use client";
import { Form } from "react-bootstrap";

export default function BootstrapForms() {
    return (
        <div id="wd-css-styling-forms">
            <h2>Bootstrap Forms</h2>
            <div className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </div>
            <hr />
            <h3>Switches</h3>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
            />
            <hr />
            <h3>Range</h3>
            <Form.Range />
            <hr />
            <h3>Input groups</h3>
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text">.00</span>
            </div>
        </div>
    );
}
