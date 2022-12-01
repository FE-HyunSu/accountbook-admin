import React, { useState } from "react";
import Modal from "../../layout/modal/index";
import { delData } from "../../../firebase/firestore";
import { BtnClose, BtnDel, ModalItemDetail } from "./style";

interface ModalProps {
  onClose: () => void;
  itemData: {
    dateTime?: string | undefined;
    contents?: string | undefined;
    price?: number | undefined;
    keyCode?: string | undefined;
    dataFix?: boolean | true;
  };
}
const ModalHistoryDetail = (props: ModalProps) => {
  const [isModalView, setModalView] = useState<boolean>(false);
  const addComa = (number: number) => {
    const numberComa = number.toString().split(".");
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberComa.join(".");
  };

  const itemDelete = async (keyCode: string, dataFix: boolean) => {
    if (dataFix) {
      alert("삭제할 수 없는 데이터 입니다.");
      return false;
    }
    if (confirm("정말 삭제하시겠습니까?")) {
      await delData("accountList", keyCode);
      await alert("삭제 되었습니다."), window.location.reload();
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
        <BtnDel
          onClick={() =>
            itemDelete(
              String(props.itemData.keyCode),
              Boolean(props.itemData.dataFix)
            )
          }
        >
          데이터 삭제
        </BtnDel>
      </ModalItemDetail>
    </Modal>
  );
};

export default ModalHistoryDetail;
