import React, { useState } from "react";
import Modal from "../../layout/modal/index";
import { BtnClose, BtnDel, ModalItemDetail } from "./style";

interface ModalProps {
  onClose: () => void;
  itemData: {
    dateTime?: string;
    contents?: string;
    price?: number;
  };
}
const ModalHistoryDetail = (props: ModalProps) => {
  const [isModalView, setModalView] = useState<boolean>(false);
  const [userNumber, setUserNumber] = useState<Number>(0);
  // 금액 단위로 숫자를 콤마 찍어서 return.
  const addComa = (number: number) => {
    const numberComa = number.toString().split(".");
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberComa.join(".");
  };

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
        <p>날짜 : {props.itemData.dateTime}</p>
        <p>내용 : {props.itemData.contents}</p>
        <p>금액 : {addComa(Number(props.itemData.price))}원</p>
        <BtnDel onClick={() => itemDelete()}>데이터 삭제</BtnDel>
      </ModalItemDetail>
    </Modal>
  );
};

export default ModalHistoryDetail;
