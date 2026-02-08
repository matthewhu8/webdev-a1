
"use client";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />

            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Card className="h-100">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="/kambaz/courses/1234/home">
                            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-truncate">
                                    CS1234 React JS
                                </Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: 100 }}>
                                    Full Stack software developer
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Card className="h-100">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="/kambaz/courses/2345/home">
                            <Card.Img variant="top" src="/images/nodejs.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-truncate">
                                    CS2345 Node JS
                                </Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: 100 }}>
                                    Backend developer
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Card className="h-100">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="/kambaz/courses/3456/home">
                            <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-truncate">
                                    CS3456 Python
                                </Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: 100 }}>
                                    Data Science
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>

                {/* Course 4 */}
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Card className="h-100">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="/kambaz/courses/4567/home">
                            <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-truncate">
                                    CS4567 Java
                                </Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: 100 }}>
                                    Enterprise Java
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>

                {/* Course 5 */}
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Card className="h-100">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="/kambaz/courses/5678/home">
                            <Card.Img variant="top" src="/images/cpp.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-truncate">
                                    CS5678 C++
                                </Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: 100 }}>
                                    Systems Programming
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>

                {/* Course 6 */}
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Card className="h-100">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="/kambaz/courses/6789/home">
                            <Card.Img variant="top" src="/images/angular.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-truncate">
                                    CS6789 Angular
                                </Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: 100 }}>
                                    SPA Development
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>

                {/* Course 7 */}
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Card className="h-100">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            href="/kambaz/courses/7890/home">
                            <Card.Img variant="top" src="/images/vue.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-truncate">
                                    CS7890 Vue JS
                                </Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: 100 }}>
                                    Progressive Framework
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>

            </div>
        </div>
    );
}
