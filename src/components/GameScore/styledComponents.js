import styled from 'styled-components'

export const GameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GameScoreName = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`
export const GameScoreBoardContainer = styled(GameScoreNameContainer)`
  background-color: black;

  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const GameScoreBoardHeading = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const GameScoreBoardScore = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
