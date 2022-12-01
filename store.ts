import { atom, selector } from "recoil";
import GetData from "./api/GetData";

interface AccountItemType {
  dateTime?: string | undefined;
  calculation: number;
  targetId?: number;
  description?: string | undefined;
  dataFix?: boolean | undefined;
}

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
      targetId: undefined,
      dateTime: undefined,
      description: undefined,
      calculation: undefined,
      fixData: undefined,
    },
  ],
});

// export const accountListData = selector<AccountItemType[]>({
//   key: "accountListData",
//   get: async () => {
//     return await GetData();
//   },
// });
