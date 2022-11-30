import React, { useState } from "react";
import { AccountCard } from "./style";
import ModalHistoryDetail from "../itemDetail/index";

interface Props {
  dateTime: string;
  contents: string;
  price: number;
  keyCode: string;
  dataFix: boolean;
}
const AccountItem = ({
  dateTime,
  contents,
  price,
  keyCode,
  dataFix,
}: Props) => {
  const [isModalHistoryDetail, setModalHistoryDetail] =
    useState<boolean>(false);
  const addComa = (number: number) => {
    const numberComa = number.toString().split(".");
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberComa.join(".");
  };
  const objItemData = {
    dateTime: dateTime,
    contents: contents,
    price: price,
    keyCode: keyCode,
    dataFix: dataFix,
  };
  const handleModalOpen = () => {
    setModalHistoryDetail(true);
  };
  const handleModalClose = () => {
    setModalHistoryDetail(false);
  };
  const shortDate = (date: string) => {
    return date.split("-")[1] + "." + date.split("-")[2];
  };

  return (
    <>
      <AccountCard>
        <dt>
          <span>{shortDate(dateTime.split(" ")[0])}</span>
          <strong>{contents}</strong>
        </dt>
        <dd className={Number(price) > 0 ? `plus` : `minus`}>
          {addComa(price)}
          <button type="button" onClick={() => handleModalOpen()}>
            상세
          </button>
        </dd>
      </AccountCard>
      {isModalHistoryDetail && (
        <ModalHistoryDetail onClose={handleModalClose} itemData={objItemData} />
      )}
    </>
  );
};

export default AccountItem;
