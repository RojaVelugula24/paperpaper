import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  @media screen and (max-width: 576px) {
    width: 170px;
    height: 170px;
    margin-bottom: 40px;
  }
`
export const GameButton = styled.button`
  width: 170px;
  height: 170px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 240px;
    height: 240px;
  }
`
export const GameImage = styled.img`
  width: 170px;
  height: 170px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`
export const ResultText = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  @media screen and (max-width: 576px) {
    width: 170px;
    height: 170px;
    margin-bottom: 40px;
  }
`
export const ResultName = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultButton = styled.button`
  width: 170px;
  height: 170px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 240px;
    height: 240px;
  }
`
