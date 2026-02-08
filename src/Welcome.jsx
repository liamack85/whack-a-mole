import { useGame } from "./GameContext";

export default function Welcome() {
  const { start, highScores } = useGame();
  return (
    <>
      <section className="welcome">
        <p>This is Whack-a-Mole!</p>
        <p>Smash as many of these little stinkers as you can!</p>
        <button onClick={start}>Start Game</button>
      </section>
      <section className="highscores">
        <h3>High Scores</h3>
        <ul>
          {highScores.length > 0 ? (
            highScores.map((score, i) => <li key={i}>{score}</li>)
          ) : (
            <li>No High Score Yet...</li>
          )}
        </ul>
      </section>
    </>
  );
}
