//بزن rafce exprtion function
//rfce     decleration function
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddList = () => {
  return (
    <>
      <Form className="d-flex">
        <Form.Group className="me-3" controlId="formBasicEmail">
          <Form.Control type="email" />
        </Form.Group>

        <Button className="" variant="success" type="submit">
          add
        </Button>
      </Form>
    </>
  );
};

export default AddList;
