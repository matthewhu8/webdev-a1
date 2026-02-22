import CourseNavigation from "./CourseNavigation";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../database";
import Breadcrumb from "./Breadcrumb";

export default async function CourseLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    const course = courses.find((course) => course._id === cid);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course?.name} <Breadcrumb course={course} />
            </h2>
            <hr />
            <div className="row">
                <div className="d-none d-md-block col-md-2">
                    <CourseNavigation />
                </div>
                <div className="col-12 col-md-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
