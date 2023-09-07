import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function MyIsland({ children }: Props) {
  const count = useSignal(0);

  return (
    <div>
      Counter is as {count}.{" "}
      <button onClick={() => (count.value += 1)}>+</button>
      {children}
    </div>
  );
}
