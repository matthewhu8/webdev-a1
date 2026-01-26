import Link from "next/link";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            href="/kambaz/courses/1234/home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link href="/kambaz/courses/1234/home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/nodejs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            href="/kambaz/courses/2345/home">
                            CS2345 Node JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Backend developer
                        </p>
                        <Link href="/kambaz/courses/2345/home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/python.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            href="/kambaz/courses/3456/home">
                            CS3456 Python
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Data Science
                        </p>
                        <Link href="/kambaz/courses/3456/home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/java.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            href="/kambaz/courses/4567/home">
                            CS4567 Java
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Enterprise Java
                        </p>
                        <Link href="/kambaz/courses/4567/home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/cpp.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            href="/kambaz/courses/5678/home">
                            CS5678 C++
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Systems Programming
                        </p>
                        <Link href="/kambaz/courses/5678/home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/angular.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            href="/kambaz/courses/6789/home">
                            CS6789 Angular
                        </Link>
                        <p className="wd-dashboard-course-title">
                            SPA Development
                        </p>
                        <Link href="/kambaz/courses/6789/home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/vue.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            href="/kambaz/courses/7890/home">
                            CS7890 Vue JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Progressive Framework
                        </p>
                        <Link href="/kambaz/courses/7890/home"> Go </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
