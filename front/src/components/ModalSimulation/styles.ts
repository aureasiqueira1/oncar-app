import styled from "styled-components";

export const ScoreBox = styled.div`
  border: 2px solid #fff;
  background-color: #2f2a44;
  font-size: 1.25rem;
  align-items: center;
  width: 100%;
  border-radius: 24px;
  padding: 1rem;
  white-space: normal;

  span {
    width: 250px;
    display: inline-block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;

export const Container = styled.div`
  .darkBG {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 24px;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45rem;
    height: 600px;
    padding: 40px;

    background: #1e004e;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalHeader {
    background: white;
    overflow: hidden;
    border-radius: 16px;
  }

  .heading {
    padding: 10px;
    color: #000;
    font-weight: 700;
    font-size: 5rem;
    text-align: center;
  }

  .modalContent {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    button {
      border-radius: 15px;
      border: 2px solid #fff;
      width: 200px;
    }
  }
`;
