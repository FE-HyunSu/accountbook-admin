import React, { useState, useEffect } from "react";
import Modal from "../../layout/modal/index";
import { BtnClose, BtnApply, ModalAccountAdd } from "./style";

interface ModalProps {
  onClose: () => void;
}
const ModalHistoryAdd = (props: ModalProps) => {
  const [isModalView, setModalView] = useState<boolean>(false);

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
            <input type="text" placeholder="날짜를 입력해주세요. YYYY-MM-DD" />
          </dd>
          <dt>이름</dt>
          <dd>
            <input type="text" placeholder="이름을 입력해주세요." />
          </dd>
          <dt>금액</dt>
          <dd>
            <input type="text" placeholder="금액을 입력해주세요." />
          </dd>
          <dt>내용</dt>
          <dd>
            <input type="text" placeholder="내용을 입력해주세요." />
          </dd>
        </dl>
        <BtnApply>적용하기</BtnApply>
      </ModalAccountAdd>
    </Modal>
  );
};

export default ModalHistoryAdd;
