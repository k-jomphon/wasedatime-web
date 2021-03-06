import React from "react";
import styled from "styled-components";

const ReviewLangSwitch = styled("button")`
  font-size: 0.6em;
  border: none;
  padding: 5px 10px;
  background-color: #ddd;
  height: 2em;
  vertical-align: 0.3em;
  line-height: 15px;
  ${(props) =>
    props.active && "border-bottom: 2px solid #fff; background-color: #eee;"};
  ${(props) => props.isInHeading && "line-height: 20px;"};

  &:hover {
    outline: none;
    background-color: #eee;
  }

  &:focus {
    outline: none;
  }
`;

const ReviewLangSwitches = ({
  reviewLang,
  switchReviewLang,
  isInHeading,
  t,
}) => (
  <span>
    <ReviewLangSwitch
      active={reviewLang === "en"}
      onClick={() => switchReviewLang("en")}
      isInHeading={isInHeading}
    >
      English
    </ReviewLangSwitch>
    <ReviewLangSwitch
      active={reviewLang === "jp"}
      onClick={() => switchReviewLang("jp")}
      isInHeading={isInHeading}
    >
      日本語
    </ReviewLangSwitch>
    <ReviewLangSwitch
      active={reviewLang === "zh_TW"}
      onClick={() => switchReviewLang("zh_TW")}
      isInHeading={isInHeading}
    >
      繁中
    </ReviewLangSwitch>
    <ReviewLangSwitch
      active={reviewLang === "zh_CN"}
      onClick={() => switchReviewLang("zh_CN")}
      isInHeading={isInHeading}
    >
      简中
    </ReviewLangSwitch>
  </span>
);

export default ReviewLangSwitches;
