import CourseNavigation from "./CourseNavigation";

export default async function CourseLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-course-layout">
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
