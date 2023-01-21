import React from "react";
import { Button, Form } from "react-bootstrap";

const CreateTask = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <div className="float-left">
          <h4>Create new task </h4>
        </div>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Priroty</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select an option from this select menu</option>
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="third">third</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateTask;
