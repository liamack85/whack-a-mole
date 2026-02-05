import { useGame } from "./GameContext";

export default function App() {
  const {} = useGame();
  return (
    <>
      <h1>Whack-a-Mole!</h1>
    </>
  );
}
