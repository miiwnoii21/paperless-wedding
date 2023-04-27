interface Props {
  text?: string;
}
export default function DisplaySubtitle({ text, ...props }: Props) {
  console.log('DisplaySubtitle');
  return (
    <div class="flex justify-center items-center text-2xl md:text-4xl h-44 md:h-40">
      {text}
    </div>
  );
}
