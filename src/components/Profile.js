import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Spinner, Alert } from 'reactstrap';

const Profile = () => {
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const userInterests = ['Web Development'];
        const courses = [
          { id: 1, title: 'React Basics', category: 'Web Development' },
          { id: 2, title: 'AI for Beginners', category: 'Artificial Intelligence' }
        ];

        const recommendations = courses.filter(course => userInterests.includes(course.category));
        setRecommendedCourses(recommendations);
      } catch (err) {
        setError('Failed to fetch recommendations.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Your Recommended Courses</h2>
      {loading && <Spinner color="primary" />}
      {error && <Alert color="danger">{error}</Alert>}
      <Row>
        {recommendedCourses.length > 0 ? (
          recommendedCourses.map(course => (
            <Col key={course.id} sm="6" md="4" className="mb-3">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{course.title}</CardTitle>
                  <CardText>Category: {course.category}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          !loading && <Alert color="info">No recommendations available.</Alert>
        )}
      </Row>
    </Container>
  );
};

export default Profile;
