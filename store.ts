import { atom } from "recoil";

export const adminInfo = atom({
  key: "user",
  default: {
    email: "",
    accessToken: "",
  },
});

export const userData = atom({
  key: "userData",
  default: [
    {
      id: undefined,
      userId: undefined,
      userImg: undefined,
      userName: undefined,
    },
  ],
});
