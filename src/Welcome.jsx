import { useGame } from "./GameContext";

export default function Welcome() {
  const { start } = useGame;
  return (
    <>
      <section>
        <p>This is Whack-a-Mole!</p>
        <p>Smash as many of these little stinkers as you can!</p>
        <button onClick={start}>Start Game</button>
      </section>
    </>
  );
}
