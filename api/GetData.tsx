import { getData } from "../firebase/firestore";
import { accountData, userData } from "../store";
import { useRecoilState } from "recoil";

const GetData = async (): Promise<any> => {
  const [globalUserData, setGlobalUserData] = useRecoilState(userData);
  const [globalAccountData, setGlobalAccountData] = useRecoilState(accountData);
  let getUserList: any = [];
  let getAccountList: any = [];
  await getData("userList").then((data) => {
    getUserList = data.docs.map((item: any) => {
      return { ...item.data() };
    });
    setGlobalUserData(getUserList);
  });
  await getData("accountList").then((data) => {
    getAccountList = data.docs.map((item: any) => {
      return { ...item.data() };
    });
    setGlobalAccountData(getAccountList);
  });
};

export default GetData;
