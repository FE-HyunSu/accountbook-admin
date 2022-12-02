import { atom, selector } from "recoil";

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
      id: undefined,
      targetId: undefined,
      dateTime: undefined,
      description: undefined,
      calculation: undefined,
      fixData: undefined,
    },
  ],
});

export const accountDataSelecter = selector({
  key: "accountDataSelecter",
  get: ({ get }) => {
    return get(accountData);
    // [
    //   {
    //     id: undefined,
    //     targetId: undefined,
    //     dateTime: undefined,
    //     description: undefined,
    //     calculation: undefined,
    //     fixData: undefined,
    //   },
    // ];
  },
});
