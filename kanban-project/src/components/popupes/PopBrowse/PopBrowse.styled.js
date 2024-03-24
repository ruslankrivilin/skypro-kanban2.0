import styled, { css } from "styled-components";
import { hover01, hover03 } from "../../../../common/Common.styled";
import { topicStyles } from "../../../styled/lib/topic";
import { TopicText } from "../../Card/Cardsitem.styled";



export const PopBrowseStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBroweTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const PopBrowseStatusTitle = styled.p`
  margin-top: 14px;
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #94A6BE;
  background: #d5dce6;
  margin-right: 7px;
  
  
`;

export const PopBrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopBrowseStatusTheme = css`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormBrowseTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ThemeDownCategories = styled.div`
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const PopBrowseButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      height: 40px;
      width: 100%;
      margin-right: 0px;
    }
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      margin-right: 0px;
    }
  }
`;

export const ButtonChengeDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
  ${hover03}
`;

export const ButtonClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  ${hover01}
`;
export const OpenedCardTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
`;

export const PopBroweColor = styled.div`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #9a48f1;
  background: #e9d4ff;
  margin-right: 7px;
`

// display: flex;
// align-items: center;
// justify-content: space-between;
// margin-bottom: 18px;