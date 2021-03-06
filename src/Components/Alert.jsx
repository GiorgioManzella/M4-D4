import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import { Component } from "react";

class CustomAlert extends Component {
  render() {
    return (
      <Alert className="bg-danger">
        <p>Hi,{this.props.name}</p>
      </Alert>
    );
  }
}

export default CustomAlert;
