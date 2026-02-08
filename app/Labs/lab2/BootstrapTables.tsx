"use client";
import { Table } from "react-bootstrap";

export default function BootstrapTables() {
    return (
        <div id="wd-css-styling-tables">
            <h2>Bootstrap Tables</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th>Topic</th>
                        <th>Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td>HTML</td>
                        <td>2/3/21</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td>CSS</td>
                        <td>2/10/21</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td>JavaScript</td>
                        <td>2/17/21</td>
                        <td>95</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Average</td>
                        <td>90</td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
}
