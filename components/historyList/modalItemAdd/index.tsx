import React, { useRef, useState, useEffect } from "react";
import Modal from "../../layout/modal/index";
import { setData } from "../../../firebase/firestore";
import { useRecoilValue, useRecoilState } from "recoil";
import { userData, updateCheckState } from "../../../store";
import { BtnClose, BtnApply, ModalAccountAdd } from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/esm/locale";

interface memberListInit {
  id?: string | undefined;
  userId?: number | undefined;
  userName?: string | undefined;
  imgUrl?: string | undefined;
}

interface ModalProps {
  onClose: () => void;
}

interface historyItemhData {
  dateTime?: string | undefined;
  calculation: number;
  targetId?: number;
  description?: string | undefined;
  dataFix?: boolean | undefined;
}
const ModalHistoryAdd = (props: ModalProps) => {
  const [isModalView, setModalView] = useState<boolean>(false);
  const refInputName = useRef<HTMLSelectElement | null>(null);
  const refInputPrice = useRef<HTMLInputElement | null>(null);
  const refInputComment = useRef<HTMLInputElement | null>(null);
  const [textValidationPrice, setValidationPrice] = useState<String>("");
  const userListData = useRecoilValue(userData);
  const [isUpdateCheck, setUpdateCheck] = useRecoilState(updateCheckState);
  const [selectDate, setSelectDate] = useState(new Date());
  const [textDate, setTextDate] = useState<string>("");

  const priceValidation = () => {
    const patternNum = /[0-9]/;
    const inputPrice = refInputPrice.current;
    if (inputPrice?.value === "") {
      setValidationPrice("");
      return false;
    } else if (inputPrice && !patternNum.test(inputPrice.value)) {
      setValidationPrice("금액에는 숫자만 입력해 주세요.");
      return false;
    } else {
      setValidationPrice("");
      return true;
    }
  };

  const commentValidation = () => {
    const inputComment = refInputComment.current;
    return inputComment?.value === "" ? false : true;
  };

  const validationCheck = () => {
    if (!priceValidation()) {
      alert("금액을 입력해 주세요.");
      return false;
    }
    if (!commentValidation()) {
      alert("내용을 입력해 주세요.");
      return false;
    }
    return true;
  };

  const dataPush = () => {
    if (validationCheck()) {
      let db: historyItemhData = {
        dateTime: textDate,
        calculation: Number(refInputPrice.current?.value),
        description: refInputComment.current?.value,
        dataFix: false,
      };
      if (Number(refInputName.current?.value) !== -1)
        db.targetId = Number(refInputName.current?.value);

      setData("accountList", db).then((data) => {
        props.onClose();
        setUpdateCheck(!isUpdateCheck);
      });
    }
  };

  const dateSelect = (date: Date) => {
    setSelectDate(date);
    setTextDate(
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
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
            <DatePicker
              // locale={ko}
              dateFormat="yyyy-MM-dd"
              selected={selectDate}
              onChange={(date: Date) => dateSelect(date)}
              className="input-datepicker"
            />
          </dd>
          <dt>이름</dt>
          <dd>
            <div className="select-box">
              <select ref={refInputName}>
                <option value={-1}>지출</option>
                {userListData &&
                  userListData.map((item: memberListInit, idx: number) => {
                    return (
                      <option key={idx} value={item.userId}>
                        {item.userName}
                      </option>
                    );
                  })}
              </select>
            </div>
          </dd>
          <dt>금액</dt>
          <dd>
            <input
              type="text"
              placeholder="금액을 입력해주세요."
              ref={refInputPrice}
              onKeyUp={priceValidation}
            />
            <p>{textValidationPrice}</p>
          </dd>
          <dt>내용</dt>
          <dd>
            <input
              type="text"
              placeholder="내용을 입력해주세요."
              ref={refInputComment}
              onKeyUp={commentValidation}
            />
          </dd>
        </dl>
        <BtnApply onClick={() => dataPush()}>적용하기</BtnApply>
      </ModalAccountAdd>
    </Modal>
  );
};

export default ModalHistoryAdd;
