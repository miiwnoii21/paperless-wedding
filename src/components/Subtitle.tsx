interface Props {
  text?: string;
}
export default function DisplaySubtitle({ text, ...props }: Props) {
  console.log('DisplaySubtitle');
  return (
    <div class="text-terracotta-600 text-center text-2xl md:text-4xl">
      {text}
    </div>
  );
}
