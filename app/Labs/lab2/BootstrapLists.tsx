"use client";
import { ListGroup } from "react-bootstrap";

export default function BootstrapLists() {
    return (
        <div id="wd-css-styling-lists">
            <h2>Bootstrap Lists</h2>
            <h3>List Group</h3>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <h3>Hyperlink List Group</h3>
            <div className="list-group">
                <a href="#wd-css-styling-lists" className="list-group-item list-group-item-action active">
                    Home
                </a>
                <a href="#wd-css-styling-lists" className="list-group-item list-group-item-action">
                    Modules
                </a>
                <a href="#wd-css-styling-lists" className="list-group-item list-group-item-action">
                    Assignments
                </a>
            </div>
        </div>
    );
}
