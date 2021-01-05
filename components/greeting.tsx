import { Button, Row, Col, Card } from "react-bootstrap";

const Greetings = (): JSX.Element => {
  return (
    <div className="d-flex flex-column w-100">
      <div id="maingreeting" className="py-3 my-1 ">
        <Card border="dark">
          <Card.Body>
            <Card.Text>
              <Row>
                <Col xs={9}>
                  <h3>Find best time for everyone to meet. Launch a poll.</h3>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <Button href="/poll/create" style={{ height: "40px" }}>
                    Create Poll
                  </Button>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Row>
        <Col>
          <h4>Your Polls </h4>
        </Col>
      </Row>

      <div className="my-2">
        {/* Show the poll titles (preferably in card layout ) here.If No polls created before, Show the next thing */}
        <p>
          You haven't created any polls yet. Start one by clicking the new poll
          button above
        </p>
      </div>
    </div>
  );
};
export default Greetings;
