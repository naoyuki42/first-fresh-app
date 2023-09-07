import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  foo: string;
}

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

export default function OtherIsland({ children, foo }: Props) {
  const number = useSignal(randomNumber());

  return (
    <div>
      <p>String from props: {foo}</p>
      <p>
        <button onClick={() => (number.value = randomNumber())}>Random</button>
        {" "}
        number is: {number}.
      </p>
    </div>
  );
}
