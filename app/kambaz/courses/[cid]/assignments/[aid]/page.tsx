export default async function AssignmentEditor({
    params,
}: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { cid, aid } = await params;
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" placeholder="Assignment Name" /><br /><br />
            <textarea id="wd-description" cols={45} rows={10}>
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" value={100} type="number" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option value="ASSIGNMENTS">Assignments</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as">
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type">
                                <option value="ONLINE">Online</option>
                            </select><br />

                            <label>Online Entry Options</label><br />

                            <input type="checkbox" name="wd-submission-type" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input type="checkbox" name="wd-submission-type" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />

                            <input type="checkbox" name="wd-submission-type" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                            <input type="checkbox" name="wd-submission-type" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                            <input type="checkbox" name="wd-submission-type" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Assign</label>
                        </td>
                        <td>
                            <label htmlFor="wd-assign-to">Assign to</label><br />
                            <input id="wd-assign-to" value="Everyone" placeholder="Everyone" /><br />

                            <label htmlFor="wd-due-date">Due</label><br />
                            <input type="date" id="wd-due-date" value="2024-05-13" /><br />

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ marginRight: "5px" }}>
                                    <label htmlFor="wd-available-from">Available from</label><br />
                                    <input type="date" id="wd-available-from" value="2024-05-06" />
                                </div>
                                <div>
                                    <label htmlFor="wd-available-until">Until</label><br />
                                    <input type="date" id="wd-available-until" value="2024-05-20" />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div style={{ textAlign: "right" }}>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}
