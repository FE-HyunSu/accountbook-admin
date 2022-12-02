import { atom, selector } from "recoil";

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

export const accountData = atom({
  key: "accountData",
  default: [
    {
      id: undefined,
      targetId: undefined,
      dateTime: undefined,
      description: undefined,
      calculation: undefined,
      fixData: undefined,
    },
  ],
});

export const updateCheckState = atom({
  key: "updateCheckState",
  default: false,
});

// export const updateCheckSelector = selector<boolean>({
//   key: "updateCheckSelector",
//   get: ({ get }) => {
//     const updateCheck = get(updateCheckState);
//     return updateCheck;
//   },
//   set: ({ set }, updateCheck) => {
//     const returnState = updateCheck;
//     set(updateCheckState, returnState);
//   },
// });
