import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { themeColor } from "../../../store";
import { HeaderBox, BtnThemeColor } from "./style";

const Header = () => {
  const [isThemeColor, setThemeColor] = useRecoilState(themeColor);
  const [cookies, setCookie, removeCookie] = useCookies(["themeCode"]);
  const themeList = [
    {
      name: "pink",
      colorCode: "#ffa5ac",
    },
    {
      name: "blue",
      colorCode: "#9ec2df",
    },
    {
      name: "yellow",
      colorCode: "#f8d346",
    },
    {
      name: "gray",
      colorCode: "#bcbcbc",
    },
  ];
  const themeChange = (colorCode: string) => {
    setThemeColor(colorCode);
    setCookie("themeCode", colorCode);
  };

  useEffect(() => {
    setThemeColor(
      cookies.themeCode === undefined ? "#ffa5ac" : cookies.themeCode
    );
  }, []);
  return (
    <>
      <HeaderBox>
        <h1>
          <strong>
            {themeList &&
              themeList.map((item, idx) => (
                <BtnThemeColor
                  key={idx}
                  style={{ backgroundColor: item.colorCode }}
                  onClick={() => themeChange(item.colorCode)}
                >
                  {item.name}
                </BtnThemeColor>
              ))}
          </strong>
          <a href="https://tubular-cocada-39cf07.netlify.app">AccountBook</a>
        </h1>
      </HeaderBox>
    </>
  );
};
export default Header;
