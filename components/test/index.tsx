import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { adminInfo } from "../../store";

const Test = () => {
  const userEmail = useRecoilValue(adminInfo);
  return (
    <>
      <div style={{ paddingTop: "1rem" }}>* Password 는 221016 입니다.</div>
      <div style={{ paddingTop: "1rem" }}>* userEmail : {userEmail.email}</div>
    </>
  );
};

export default Test;
