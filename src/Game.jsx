import { useGame } from "./GameContext";

export default function Game() {
  const { goToWelcome, score } = useGame();
  return (
    <article>
      <h2>Lets Play!</h2>
      <button onClick={goToWelcome}>Back</button>
      <p>{score}</p>
    </article>
  );
}
