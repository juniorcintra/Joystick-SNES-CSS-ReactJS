import {
  Container,
  LeftSideCircle,
  RightSideCircle,
  CenterRetangule,
  RightCenterCircleInside,
  LeftCenterCircleInside,
  VerticalRetanguleArrow,
  HorizontalRetanguleArrow,
  ExtraRetanguleVertical,
  TopArrow,
  LeftArrow,
  RightArrow,
  BottomArrow,
  SpaceButtonsXY,
  SpaceButtonsAB,
  LetterX,
  LetterY,
  LetterA,
  LetterB,
  BlueButton,
  GreenButton,
  RedButton,
  YellowButton,
  LogoImg,
  SpaceButton1,
  SpaceButton2,
  ButtonSelect,
  ButtonStart,
  TitleSelect,
  TitleStart,
} from "./styles";

import Logo from "./logo.png";

function App() {
  return (
    <Container>
      <LeftSideCircle />
      <LeftCenterCircleInside />
      <CenterRetangule />
      <RightSideCircle />
      <RightCenterCircleInside />
      <VerticalRetanguleArrow />
      <HorizontalRetanguleArrow />
      <ExtraRetanguleVertical />
      <TopArrow />
      <LeftArrow />
      <RightArrow />
      <BottomArrow />
      <SpaceButtonsXY />
      <SpaceButtonsAB />
      <LetterX>X</LetterX>
      <LetterY>Y</LetterY>
      <LetterA>A</LetterA>
      <LetterB>B</LetterB>
      <BlueButton />
      <GreenButton />
      <RedButton />
      <YellowButton />
      <LogoImg src={Logo} alt="logo" />
      <SpaceButton1 />
      <SpaceButton2 />
      <ButtonSelect />
      <ButtonStart />
      <TitleSelect>Select</TitleSelect>
      <TitleStart>Start</TitleStart>
    </Container>
  );
}

export default App;
