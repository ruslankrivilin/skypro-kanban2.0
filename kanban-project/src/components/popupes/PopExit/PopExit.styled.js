import styled from "styled-components";
import { hover03 } from "../../common/Common.styled";

export const PopExites = styled.div`
  
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  &:target {
    display: block;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`

export const PopExitTtl = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 375px) {
    display: block;
  }
`

export const PopExitYes = styled.div`
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #565EEF;
    margin-right: 10px;
    cursor: pointer;
    a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    @media only screen and (max-width: 375px) {
    width: 100%;
    height: 100%;
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
  }

    ${hover03}
`

export const PopExitNo = styled.div`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;
  cursor: pointer;
  a {
    width: 100%;
    height: 100%;
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }

  ${hover03}
`