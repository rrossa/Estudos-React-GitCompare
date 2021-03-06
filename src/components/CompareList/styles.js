import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  margin: 0 10px;
  flex-direction: column;
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;
    }

    small {
      font-weight: normal;
      font-size: 12px;
      color: #999;
      font-style: italic;
      padding: 10px;
    }

    &:nth-child(2n - 1) {
      background: #dcdcdc;
    }
  }
`;
