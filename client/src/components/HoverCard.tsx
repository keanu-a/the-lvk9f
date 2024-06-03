type HoverCardProps = {
  image: string;
  text: string;
  link: string;
};

export default function HoverCard({ image, text, link }: HoverCardProps) {
  return (
    <a
      href={link}
      className="h-full duration-300 shadow-lg rounded-lg p-4 hover:shadow-xl"
    >
      <div className="w-32 flex flex-col text-center gap-4">
        <img src={image} className="object-cover w-full" />
        <p className="text-sm">{text}</p>
      </div>
    </a>
  );
}
