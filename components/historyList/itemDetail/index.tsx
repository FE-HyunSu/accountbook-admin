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

  const itemDelete = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      alert("삭제 되었습니다.");
    } else {
      alert("취소 되었습니다.");
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <BtnClose onClick={props.onClose}>닫기</BtnClose>
      <ModalItemDetail className={isModalView ? `active` : ``}>
        <h1>상세보기</h1>
        <p>data</p>
        <BtnApply onClick={() => itemDelete()}>삭제</BtnApply>
      </ModalItemDetail>
    </Modal>
  );
};

export default ModalHistoryDetail;
