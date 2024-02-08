import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((prev) => prev + 1);
    await delay(3000);
    setPending((prev) => prev - 1);
    setCompleted((prev) => prev + 1);
  }

  return (
    <>
      <h3>Bekleyen: {pending}</h3>
      <h3>Tamamlanan: {completed}</h3>
      <button onClick={handleClick}>Satın al</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
