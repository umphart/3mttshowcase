import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Home = () => {
  return (
    <Container fluid className="mt-4">
      <Card>
        <CardBody>
          <CardTitle tag="h1">Welcome to Skillify!</CardTitle>
          <CardText>
            Learn new skills and grow your potential with personalized course recommendations.
          </CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;
