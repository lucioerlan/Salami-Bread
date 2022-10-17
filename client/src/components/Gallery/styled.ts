import styled from 'styled-components';

export const Container = styled.div`
  background: url(${'background1'}), url(${'background2'}), no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  height: 100%;
`;

export const CardsBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;

  padding: 1rem;
  place-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 280px);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 280px);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin: 42px;

  @media (min-width: 300px) {
    width: 270px;
  }

  @media (min-width: 600px) {
    width: 570px;
  }

  @media (min-width: 900px) {
    width: 860px;
  }

  @media (min-width: 1200px) {
    width: 1150px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    font-family: Roboto, sans-serif;
    margin-left: 8px;
    color: #1c1c1c;
  }
`;

export const Button = styled.div`
  border: solid 1px rgba(51, 51, 51, 0.2);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 0px 0px 16px;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 20px;

  @media (min-width: 300px) {
    width: 200px;

    justify-content: space-between;
  }

  @media (min-width: 600px) {
    width: 570px;
    justify-content: flex-end;
  }

  @media (min-width: 900px) {
    width: 860px;
    justify-content: flex-end;
  }

  @media (min-width: 1200px) {
    width: 1150px;
    justify-content: flex-end;
  }
`;

export const ButtonLeft = styled('img')``;
export const ButtonRight = styled('img')``;
export const Pagination = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
