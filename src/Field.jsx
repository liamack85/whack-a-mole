import { useGame } from "./GameContext";

export default function Field() {
  const { field } = useGame();
  return <ul>{field.map}</ul>;
}
