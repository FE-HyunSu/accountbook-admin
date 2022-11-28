import React, { useRef, useState, useEffect } from "react";
import Modal from "../../layout/modal/index";
import { setData } from "../../../firebase/firestore";
import { BtnClose, BtnApply, ModalItemDetail } from "./style";

interface ModalProps {
  onClose: () => void;
}
const ModalHistoryDetail = (props: ModalProps) => {
  const [isModalView, setModalView] = useState<boolean>(false);
  const [userNumber, setUserNumber] = useState<Number>(0);

  return (
    <Modal onClose={props.onClose}>
      <BtnClose onClick={props.onClose}>닫기</BtnClose>
      <ModalItemDetail className={isModalView ? `active` : ``}>
        <h1>상세보기</h1>
        <p>data</p>
      </ModalItemDetail>
    </Modal>
  );
};

export default ModalHistoryDetail;
