import { createSignal } from 'solid-js';

interface Props {
  text?: string;
}

export default function Counter({ text, ...props }: Props) {
  const [count, setCount] = createSignal(0);
  console.log(333);
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => setCount(count() + 1)}
    >
      Clicks {text}: {count()}
    </button>
  );
}
