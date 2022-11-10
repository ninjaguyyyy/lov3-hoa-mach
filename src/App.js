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
  const [wrongPasswordMsg, setWrongPasswordMsg] = useState("");
  const [password, setPassword] = useState("");

  const toggleModal = () => {
    setWrongPasswordMsg("");
    setIsOpenModal(!isOpenModal);
  };

  const handleSubmitPassword = () => {
    setWrongPasswordMsg("Hmm.. Sai ròi!");
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === "") {
      setWrongPasswordMsg("");
    }
  };

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
          <Input value={password} name="password" placeholder="Enter a password" size={"lg"} onChange={handleChangePassword} />
          <div className="modal_submit">
            <div className="err">{wrongPasswordMsg}</div>
            <div className="buttons">
              <div className="question">
                Hòa <img src={Heart} alt="heart" width={40} height={40} /> Chí ?
              </div>
              <Button color="warning" size="lg" onClick={handleSubmitPassword}>
                Có
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
