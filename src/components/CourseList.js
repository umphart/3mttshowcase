import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Spinner, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Replace with actual API call
        const fetchedCourses = [
          { id: 1, title: 'React Basics', category: 'Web Development' },
          { id: 2, title: 'AI for Beginners', category: 'Artificial Intelligence' },
        ];
        setCourses(fetchedCourses);
      } catch (err) {
        setError('Failed to fetch courses.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <Spinner color="primary" />;
  if (error) return <Alert color="danger">{error}</Alert>;

  return (
    <Row>
      {courses.map(course => (
        <Col key={course.id} sm="6" md="4" className="mb-3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                <Link to={`/course/${course.id}`}>{course.title}</Link>
              </CardTitle>
              <CardText>Category: {course.category}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;
