import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./submitmodal.css";
function Submitmodal(props) {
  //   const [show, setShow] = useState(false);
  let isValid = false;
  let fname = props.firstname;
  let lname = props.lastname;
  let mail = props.email;
  let phnum = props.phonenumber;
  let addr = props.address;
  let doc = props.document;

  //   const handleClose = () => setShow(false);
  const handleSubmit = async () => {
    props.handleClose();
    console.log(" data submitted");
    try {
      const body = { fname, lname, mail, phnum, addr, doc };
      const response = await fetch("http://localhost:5000/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          //console.log(data);
        });
     // console.log(response);
    } catch (error) {
      console.log(error);
    }
    if (
      props.firstname !== null &&
      props.lastname !== null &&
      props.address !== null &&
      props.document !== null
    ) {
      if (props.phonenumber.length === 10) {
        isValid = true;
      }
    }

 
  };
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to save this data?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={4} className="col">
                Name: {props.firstname + " " + props.lastname}
              </Col>
              <Col className="col" xs={6}>
                Address : {props.address}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="col">
                Email: {props.email}
              </Col>
              <Col className="col">Contact : {props.phonenumber}</Col>
            </Row>
          </Container>
          <img id="imgProof" width={400} src={props.document}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} type="submit" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Submitmodal;
