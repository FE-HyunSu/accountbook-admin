import React from "react";
import { SkeletonBox } from "./style";
import Skeleton from "../../layout/skeleton";

const SkeletonList = () => {
  const skeletonCount = new Array(10).fill("");
  return (
    <>
      {skeletonCount &&
        skeletonCount.map((item, idx) => (
          <li key={idx}>
            <SkeletonBox>
              <dl>
                <dt>
                  <strong>
                    <Skeleton boxWidth={"5rem"} boxHeight={"2rem"} />
                  </strong>
                  <strong>
                    <Skeleton boxWidth={"15rem"} boxHeight={"2rem"} />
                  </strong>
                </dt>
                <dd>
                  <Skeleton boxWidth={"8rem"} boxHeight={"2rem"} />
                </dd>
              </dl>
            </SkeletonBox>
          </li>
        ))}
    </>
  );
};

export default SkeletonList;
