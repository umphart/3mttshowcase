import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Spinner, Alert } from 'reactstrap';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // Replace with actual API call
        const fetchedCourse = {
          id: Number(id),
          title: 'React Basics',
          description: 'Learn the basics of React, a powerful library for building user interfaces.',
          category: 'Web Development',
        };
        setCourse(fetchedCourse);
      } catch (err) {
        setError('Failed to fetch course details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) return <Spinner color="primary" />;
  if (error) return <Alert color="danger">{error}</Alert>;

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{course.title}</CardTitle>
        <CardText>{course.description}</CardText>
        <CardText>Category: {course.category}</CardText>
      </CardBody>
    </Card>
  );
};

export default CourseDetails;
