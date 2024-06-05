type HoverCardProps = {
  image: string;
  text: string;
  link: string;
};

export default function HoverCard({ image, text, link }: HoverCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-main-white h-full duration-300 shadow-lg rounded-lg p-4 group hover:shadow-2xl"
    >
      <div className="w-32 flex flex-col text-center gap-4">
        <img src={image} className="object-cover w-full" />
        <p className="text-sm duration-300 group-hover:text-main-blue">
          {text}
        </p>
      </div>
    </a>
  );
}
