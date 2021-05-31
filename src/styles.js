import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
`;

export const LeftSideCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #c6c7cb;
  position: absolute;
  top: 150px;
  left: 75px;
`;
export const RightSideCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #c6c7cb;
  position: absolute;
  top: 150px;
  right: 75px;
`;

export const CenterRetangule = styled.div`
  background-color: #c6c7cb;
  width: 298px;
  height: 150px;
  position: absolute;
  top: 150px;
  left: 172px;
`;

export const RightCenterCircleInside = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #7f8287;
  position: absolute;
  top: 160px;
  right: 85px;
`;

export const LeftCenterCircleInside = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: 124px;
  box-shadow: inset 2px 2px 9px #97989d;
  z-index: 9;
`;

export const VerticalRetanguleArrow = styled.div`
  width: 16px;
  height: 58px;
  border: 3px solid #000;
  background-color: #545559;
  position: absolute;
  top: 215px;
  left: 161px;
  border-radius: 3px;
`;

export const HorizontalRetanguleArrow = styled.div`
  width: 58px;
  height: 16px;
  border: 3px solid #000;
  background-color: #545559;
  position: absolute;
  top: 237px;
  left: 140px;
  border-radius: 3px;
`;

export const ExtraRetanguleVertical = styled.div`
  width: 14px;
  height: 55px;
  background-color: #545559;
  position: absolute;
  top: 218px;
  left: 163px;
  border-radius: 3px;
  border: 2px solid #545559;
`;

export const TopArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 15px solid #62626a;
  z-index: 999999;
  position: absolute;
  top: 219px;
  left: 165px;
`;

export const LeftArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 15px solid #62626a;
  border-bottom: 7px solid transparent;
  z-index: 999999;
  position: absolute;
  top: 241px;
  left: 145px;
`;

export const RightArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-left: 15px solid #62626a;
  border-bottom: 7px solid transparent;
  z-index: 999999;
  position: absolute;
  top: 241px;
  left: 185px;
`;

export const BottomArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-top: 15px solid #62626a;
  border-right: 7px solid transparent;
  z-index: 999999;
  position: absolute;
  top: 261px;
  left: 165px;
`;

export const SpaceButtonsXY = styled.div`
  background-color: #c0c0c2;
  width: 43px;
  height: 92px;
  position: absolute;
  top: 183px;
  left: 423px;
  transform: rotate(45deg);
  border-radius: 49px;
`;

export const SpaceButtonsAB = styled.div`
  background-color: #c0c0c2;
  width: 43px;
  height: 92px;
  position: absolute;
  top: 227px;
  left: 468px;
  transform: rotate(45deg);
  border-radius: 49px;
`;

export const LetterX = styled.p`
  color: #bec1ca;
  font-size: 15px;
  position: absolute;
  top: 176px;
  left: 486px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 0;
`;

export const LetterY = styled.p`
  color: #bec1ca;
  font-size: 15px;
  position: absolute;
  top: 265px;
  left: 394px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 0;
`;

export const LetterA = styled.p`
  color: #bec1ca;
  font-size: 15px;
  position: absolute;
  top: 220px;
  left: 530px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 0;
`;

export const LetterB = styled.p`
  color: #bec1ca;
  font-size: 15px;
  position: absolute;
  top: 309px;
  left: 435px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 0;
`;

export const BlueButton = styled.div`
  background-color: #034bb1;
  width: 37px;
  height: 37px;
  position: absolute;
  top: 193px;
  left: 443px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #000;
`;

export const GreenButton = styled.div`
  background-color: #288358;
  width: 37px;
  height: 37px;
  position: absolute;
  top: 228px;
  left: 409px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #000;
`;

export const RedButton = styled.div`
  background-color: #a60d1f;
  width: 37px;
  height: 37px;
  position: absolute;
  top: 237px;
  left: 488px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #000;
`;

export const YellowButton = styled.div`
  background-color: #ceaf3a;
  width: 37px;
  height: 37px;
  position: absolute;
  top: 271px;
  left: 454px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #000;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 170px;
  width: 177px;
  left: 201px;
`;

export const SpaceButton1 = styled.div`
  width: 12px;
  height: 35px;
  border-radius: 30px;
  background-color: #c7c8cc;
  position: absolute;
  top: 240px;
  left: 286px;
  box-shadow: inset 5px 1px 5px #9a9b9f;
  transform: rotate(50deg);
`;

export const SpaceButton2 = styled.div`
  width: 12px;
  height: 35px;
  border-radius: 30px;
  background-color: #c7c8cc;
  position: absolute;
  top: 239px;
  left: 330px;
  box-shadow: inset 5px 1px 5px #9a9b9f;
  transform: rotate(50deg);
`;

export const ButtonSelect = styled.div`
  width: 10px;
  height: 32px;
  border-radius: 30px;
  background-color: #606166;
  position: absolute;
  top: 242px;
  left: 287px;
  box-shadow: 5px 1px 5px #9a9b9f;
  transform: rotate(50deg);
`;

export const ButtonStart = styled.div`
  width: 10px;
  height: 32px;
  border-radius: 30px;
  background-color: #606166;
  position: absolute;
  top: 241px;
  left: 331px;
  box-shadow: 5px 1px 5px #9a9b9f;
  transform: rotate(50deg);
`;

export const TitleSelect = styled.p`
  color: #606166;
  font-size: 9px;
  position: absolute;
  top: 275px;
  left: 277px;
  font-family: monospace;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  font-style: italic;
`;

export const TitleStart = styled.p`
  color: #606166;
  font-size: 9px;
  position: absolute;
  top: 275px;
  left: 324px;
  font-family: monospace;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  font-style: italic;
`;
