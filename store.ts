import { atom } from "recoil";

export const adminInfo = atom({
  key: "user",
  default: {
    email: "",
  },
});

export const userListData = atom({
  key: "userListData",
  default: {
    id: "",
    userImg: "",
    userName: "",
  },
});
