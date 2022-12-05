import { FooterBox } from "./style";
import { useRecoilValue } from "recoil";
import { themeColor } from "../../../store";

const Footer = () => {
  const bgColor = useRecoilValue(themeColor);
  return (
    <>
      <FooterBox style={{ backgroundColor: bgColor }}>
        <p>KHS. ALL RIGHT RESERVED.</p>
      </FooterBox>
    </>
  );
};
export default Footer;
