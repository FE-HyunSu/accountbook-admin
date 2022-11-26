import React, { useRef, useState, useEffect } from "react";
import Modal from "../../layout/modal/index";
import { BtnClose, BtnApply, ModalAccountAdd } from "./style";
import { setData } from "../../../firebase/firestore";

interface ModalProps {
  onClose: () => void;
}
const ModalHistoryAdd = (props: ModalProps) => {
  const [isModalView, setModalView] = useState<boolean>(false);
  const refInputDate = useRef<HTMLInputElement | null>(null);
  const refInputName = useRef<HTMLInputElement | null>(null);
  const refInputPrice = useRef<HTMLInputElement | null>(null);
  const refInputComment = useRef<HTMLInputElement | null>(null);
  const validationCheck = () => {
    const patternNum = /[0-9]/;

    const inputDate = refInputDate.current;
    const inputName = refInputName.current;
    const inputPrice = refInputPrice.current;
    const inputComment = refInputComment.current;

    if (inputDate?.value === "") {
      alert("날짜를 입력해 주세요.");
      console.log(refInputDate.current?.value);
      return false;
    }
    if (inputName?.value === "") {
      alert("이름을 입력해 주세요.");
      console.log(refInputDate.current?.value);
      return false;
    }
    if (inputPrice?.value === "") {
      alert("금액을 입력해 주세요.");
      console.log(refInputDate.current?.value);
      return false;
    }
    if (inputPrice && !patternNum.test(inputPrice.value)) {
      alert("금액에는 숫자만 입력해 주세요.");
      console.log(refInputDate.current?.value);
      return false;
    }
    if (inputComment?.value === "") {
      alert("내용을 입력해 주세요.");
      return false;
    }
    return true;
  };

  const dataPush = () => {
    if (validationCheck()) {
      const db = {
        dateTime: refInputDate.current?.value,
        targetId: Number(refInputName.current?.value),
        calculation: Number(refInputPrice.current?.value),
        description: refInputComment.current?.value,
      };
      setData("accountList", db).then((data) => {
        console.log(data);
      });
    }
  };

  useEffect(() => {
    setModalView(true);
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <BtnClose onClick={props.onClose}>닫기</BtnClose>
      <ModalAccountAdd className={isModalView ? `active` : ``}>
        <h1>입출금 기록 추가</h1>
        <dl>
          <dt>날짜</dt>
          <dd>
            <input
              type="text"
              placeholder="날짜를 입력해주세요. YYYY-MM-DD"
              ref={refInputDate}
            />
          </dd>
          <dt>이름</dt>
          <dd>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              ref={refInputName}
            />
          </dd>
          <dt>금액</dt>
          <dd>
            <input
              type="text"
              placeholder="금액을 입력해주세요."
              ref={refInputPrice}
            />
          </dd>
          <dt>내용</dt>
          <dd>
            <input
              type="text"
              placeholder="내용을 입력해주세요."
              ref={refInputComment}
            />
          </dd>
        </dl>
        <BtnApply onClick={() => dataPush()}>적용하기</BtnApply>
      </ModalAccountAdd>
    </Modal>
  );
};

export default ModalHistoryAdd;
