import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import data from "../Data/scifi.json";

const MyBook = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((element) => (
          <Card style={{ height: "23rem", width: "15rem" }}>
            <Card.Img variant="top" src={element.img} />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyBook;
