import Modules from "../modules/page";

export default function CourseHome() {
    return (
        <div id="wd-course-home">
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <Modules />
                        </td>
                        <td valign="top">
                            <div id="wd-course-status">
                                <button>Unpublish</button> <button>Publish</button>
                                <br />
                                <button>Import Existing Content</button><br />
                                <button>Import from Commons</button><br />
                                <button>Choose Home Page</button><br />
                                <button>View Course Stream</button><br />
                                <button>New Announcement</button><br />
                                <button>New Analytics</button><br />
                                <button>View Course Notifications</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
