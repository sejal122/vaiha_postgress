import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./formui.css";
import { useState } from "react";
import Submitmodal from "./submitmodal";
function Formui() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);
  const [document, setDocument] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const getFirstname = () => {};
  //   const getLastname = () => {};
  //   const getEmail = () => {};
  //   const getAdress = () => {};
  //   const getDocument = () => {};
  //   const getPhonenumber = () => {};

  return (
    <div className="formDIV">
      <Form>
        <Form.Group className="mb-3" controlId="Input1">
          <Form.Label className="label">First name</Form.Label>
          <Form.Control
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            placeholder="Jhon"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Input2">
          <Form.Label className="label">Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wells"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Input3">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Input4">
          <Form.Label className="label">Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="please enter 10 digits"
            required
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Textarea1">
          <Form.Label className="label">Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className="label">Document proof</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            required
            onChange={(e) => {
              setDocument(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </Form.Group>

        <Button onClick={handleShow}>Submit form</Button>
      </Form>
      <Submitmodal
        show={show}
        handleClose={handleClose}
        firstname={firstname}
        lastname={lastname}
        email={email}
        phonenumber={phonenumber}
        address={address}
        document={document}
      />
    </div>
  );
}

export default Formui;
