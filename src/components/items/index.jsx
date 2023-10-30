//بزن rafce exprtion function
//rfce     decleration function
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import AddFormModal from "../addFormModal";
const Items = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    //fragment
    <>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Button
        variant="info"
        className="m-auto fw-bold mt-3 text text-white"
        onClick={handleShow}
      >
        add to list
      </Button>
      <AddFormModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Items;
