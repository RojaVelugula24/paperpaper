import {
  GameScoreContainer,
  GameScoreNameContainer,
  GameScoreName,
  GameScoreBoardContainer,
  GameScoreBoardHeading,
  GameScoreBoardScore,
} from './styledComponents'

const GameScore = props => {
  const {score} = props
  return (
    <GameScoreContainer>
      <GameScoreNameContainer>
        <GameScoreName>
          Rock <br />
          Paper
          <br />
          Scissors
        </GameScoreName>
      </GameScoreNameContainer>
      <GameScoreBoardContainer>
        <GameScoreBoardHeading>Score</GameScoreBoardHeading>
        <GameScoreBoardScore>{score}</GameScoreBoardScore>
      </GameScoreBoardContainer>
    </GameScoreContainer>
  )
}
export default GameScore
