import "./App.css";
import Typical from "react-typical";
import UnLock from "./open-padlock.png";
import Lock from "./lock.png";
import { useState } from "react";
import { Button, Input, Modal, ModalBody, ModalFooter } from "reactstrap";
import Heart from "./red-heart_2764-fe0f.gif";

function App() {
  const [isLock, setIsLock] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <div>
      <div class="my_girl">
        <p>Như Hòa</p>
      </div>
      <div className="lock" onClick={toggleModal}>
        <img src={isLock ? Lock : UnLock} alt="lock" />
      </div>
      <Typical steps={["Hello", 1000, "Hello world!", 500]} loop={Infinity} wrapper="p" />

      <Modal isOpen={isOpenModal} toggle={toggleModal}>
        <ModalBody style={{ background: "#ea80b0" }}>
          <Input name="password" placeholder="Enter a password" size={"lg"} />
          <div className="modal_submit">
            <div className="question">
              Hòa <img src={Heart} alt="heart" width={40} height={40} /> Chí ?
            </div>
            <Button color="warning" size="lg" onClick={toggleModal}>
              Có
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
