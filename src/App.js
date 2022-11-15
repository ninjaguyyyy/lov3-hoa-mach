import "./App.css";
import Typical from "react-typical";
import UnLock from "./open-padlock.png";
import Lock from "./lock.png";
import { useState } from "react";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Heart from "./red-heart_2764-fe0f.gif";
import { TypeAnimation } from "react-type-animation";
import Ghe from "./IMG_2083.jpg";
import Hue from "./289026285_5571687692851380_7349109356899246250_n.jpeg";

const PASSWORD = "didanhrang";

const HINTS = {
  1: "Đà Lạt",
  2: "An Nhiên & Bee",
  3: "At Night",
  4: "3 từ + không cách + không kí tự đặc biệt + không dấu + không có số",
  5: "2 từ đ",
  6: "từ đầu tiên -> di",
  7: "còn 8 ký tự còn lại",
  8: "là động từ",
  9: "chuẩn bị cho tình yêu bắt đầu",
  10: "trước khi cùng nhau ngủ",
  11: "1 ngày nên làm 2 lần",
  12: "didanhrang",
};

function App() {
  const [isLock, setIsLock] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenLetterModal, setIsOpenLetterModal] = useState(false);
  const [isOpenGiftModal, setIsOpenGiftModal] = useState(false);
  const [wrongPasswordMsg, setWrongPasswordMsg] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  const toggleModal = () => {
    setWrongPasswordMsg("");
    setIsOpenModal(!isOpenModal);
  };

  const toggleLetterModal = () => {
    setIsOpenLetterModal(!isOpenLetterModal);
  };

  const toggleGiftModal = () => {
    setIsOpenGiftModal(!isOpenGiftModal);
  };

  const handleSubmitPassword = () => {
    if (password === PASSWORD) {
      setIsOpenLetterModal(true);
      setIsOpenModal(false);
    } else {
      setWrongPasswordMsg("Hmm.. Sai ròi!");
    }
  };

  const handleSubmitLetter = () => {
    setIsOpenLetterModal(false);
    setIsOpenGiftModal(true);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === "") {
      setWrongPasswordMsg("");
    }
  };

  const requestHint = () => {
    const newCount = count + 1;
    setCount(newCount);
    const message = HINTS[newCount];
    alert(message);
  };

  return (
    <div>
      <div class="my_girl">
        <p>Như Hòa</p>
      </div>
      <div className="lock" onClick={toggleModal}>
        <img src={isLock ? Lock : UnLock} alt="lock" />
      </div>
      <div className="hint" onClick={requestHint}>
        <p className="count">{count}</p>
        <p style={{ fontSize: "28px" }}>💋</p>
      </div>

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

      <Modal isOpen={isOpenLetterModal} toggle={toggleLetterModal} centered className="letter_modal">
        <ModalHeader style={{ background: "#ea80b0", color: "#fff" }} toggle={toggleLetterModal}></ModalHeader>
        <ModalBody style={{ background: "#ea80b0", color: "#fff" }}>
          <p>Gửi em.</p>
          <p>
            Anh xin lỗi em. Có lẽ đối với anh những ngày qua là những ngày sóng gió nhất trong khoảng thời gian mình quen nhau. Mặc dù không phải là ngày khiến
            tụi mình mệt nhọc dắt xe từng cây số, không phải là ngày hai đứa dầm mưa đội nắng đi về nhà, cũng không phải là những ngày đứa ở Đà Nẵng đứa ở Sài
            Gòn xa nhau cả tuần lễ. Mà đó là những ngày mà khiến anh đứng ở giữa hai sự lựa chọn là dừng lại hay tiếp tục.
          </p>
          <p>
            Dừng lại thì em sẽ có cơ hội tìm một người tốt hơn chăm sóc quan tâm em nhiều hơn, được tự do đi chơi, tự do mặc đồ mình thích. Tiếp tục thì anh sợ
            em sẽ bị ảnh hưởng bởi những cảm xúc tiêu cực của anh.
          </p>
          <p>
            Mặc dù là rất dễ dàng nhưng anh cũng đã có cho mình lựa chọn. Nhưng khổ nổi ông bà ta có câu tình yêu phải xuất phát từ hai phía cũng như sự chia ly
            cũng phải được sự đồng thuận của hai bên. Do đó cũng cần sự lựa chọn và quyết định của em. Dưới đây là hai lựa chọn cho em.
          </p>
          <p>Em cứ suy nghĩ thật kỹ, dùng con tim và lý trí của mình và quyết định theo cảm xúc. Em nhớ rằng:</p>
          <p>/Tình cảm đẹp nhất là, cả hai đều luôn chân thành với nhau...</p>
          <p>Còn tình yêu đẹp nhất, là dù thế nào đi chăng nữa cũng không ai có ý định rời đi..</p>
          <br />
          <div className="letter_buttons">
            <Button color="secondary" style={{ marginRight: "10px" }} onClick={toggleLetterModal} size="lg" disabled>
              Dừng lại
            </Button>
            <Button color="warning" onClick={handleSubmitLetter} size="lg">
              Tiếp tục
            </Button>
          </div>
        </ModalBody>
      </Modal>

      <Modal isOpen={isOpenGiftModal} toggle={toggleGiftModal} centered className="letter_modal">
        <ModalHeader style={{ background: "#ea80b0", color: "#fff" }} toggle={toggleGiftModal}>
          <span>Quà kỉ niệm 5 tháng yêu nhau?</span>
        </ModalHeader>
        <ModalBody style={{ background: "#ea80b0", color: "#fff" }}>
          <img src={Ghe} alt="ghe" width={340} height={300} />
          <img src={Hue} alt="hue" width={340} height={300} style={{ marginBottom: "20px", marginTop: "20px" }} />
          <div className="letter_buttons">
            <Button color="warning" onClick={toggleGiftModal} size="lg">
              Chọn
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
