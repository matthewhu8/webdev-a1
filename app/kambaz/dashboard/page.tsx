"use client"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "../courses/reducer";
import { RootState } from "../store";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import * as client from "../courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<Set<string>>(new Set());
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const fetchMyCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      dispatch(setCourses(myCourses));
      setEnrolledCourseIds(new Set(myCourses.map((c: any) => c._id)));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllCoursesData = async () => {
    try {
      const all = await client.fetchAllCourses();
      setAllCourses(all);
      const myCourses = await client.findMyCourses();
      dispatch(setCourses(myCourses));
      setEnrolledCourseIds(new Set(myCourses.map((c: any) => c._id)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (showAllCourses) {
      fetchAllCoursesData();
    } else {
      fetchMyCourses();
    }
  }, [currentUser, showAllCourses]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    setEnrolledCourseIds(new Set([...enrolledCourseIds, newCourse._id]));
    if (showAllCourses) {
      setAllCourses([...allCourses, newCourse]);
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
    setAllCourses(allCourses.filter((c: any) => c._id !== courseId));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => c._id === course._id ? course : c)));
    setAllCourses(allCourses.map((c: any) => c._id === course._id ? course : c));
  };

  const onEnroll = async (courseId: string) => {
    await client.enrollInCourse(courseId);
    const newIds = new Set([...enrolledCourseIds, courseId]);
    setEnrolledCourseIds(newIds);
    const enrolled = allCourses.filter((c: any) => newIds.has(c._id));
    dispatch(setCourses(enrolled));
  };

  const onUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse(courseId);
    const newIds = new Set([...enrolledCourseIds]);
    newIds.delete(courseId);
    setEnrolledCourseIds(newIds);
    const enrolled = allCourses.filter((c: any) => newIds.has(c._id));
    dispatch(setCourses(enrolled));
  };

  const displayedCourses = showAllCourses ? allCourses : courses;
  const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(false)}
          id="wd-my-courses-btn"
        >
          My Courses
        </button>
        <button
          className="btn btn-secondary float-end me-2"
          onClick={() => setShowAllCourses(true)}
          id="wd-all-courses-btn"
        >
          All Courses
        </button>
      </h1>
      <hr />
      {isFaculty && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end" onClick={onAddNewCourse} id="wd-add-new-course-click">
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={onUpdateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><br />
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} rows={3} as="textarea"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "My Courses"} ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c: any) => (
            <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/kambaz/courses/${c._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {c.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    {showAllCourses && (
                      enrolledCourseIds.has(c._id) ? (
                        <button
                          onClick={(e) => { e.preventDefault(); onUnenroll(c._id); }}
                          className="btn btn-danger float-end"
                          id="wd-unenroll-btn"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={(e) => { e.preventDefault(); onEnroll(c._id); }}
                          className="btn btn-success float-end"
                          id="wd-enroll-btn"
                        >
                          Enroll
                        </button>
                      )
                    )}
                    {isFaculty && !showAllCourses && (
                      <>
                        <button onClick={(event) => { event.preventDefault(); setCourse(c); }}
                          className="btn btn-warning me-2 float-end" id="wd-edit-course-click">
                          Edit
                        </button>
                        <button onClick={(event) => { event.preventDefault(); onDeleteCourse(c._id); }}
                          className="btn btn-danger float-end" id="wd-delete-course-click">
                          Delete
                        </button>
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
