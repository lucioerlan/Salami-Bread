import styled from 'styled-components';

export const Card = styled.div`
  /* border: solid 5px green; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 272px;
  height: 160px;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.1);
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 244px;
  max-height: 130px;
`;

export const BookImg = styled.div`
  width: 81px;
  min-width: 81px;
  height: 122px;
  background-position: center;
  background-size: cover;
`;
export const BookInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  height: 122px;
`;
export const BookTitle = styled.div`
  color: #333333;
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
export const BookAuthor = styled.div`
  font-family: 'Heebo', sans-serif;
  color: #FCCA50;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
`;
export const BookDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
`;
export const BookSpan = styled.span`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const ModalContent = styled.div`
  width: 500px;
  height: 500px;
  border: solid 5px green;
  position: absolute;
  z-index: 2999;
`;
