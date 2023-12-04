type Props = {
  children: React.ReactNode;
  bgColor?: string;
  width?: "full" | "half";
  shift?: "right" | "left";
};

export default function ColorContainer({
  children,
  bgColor,
  width = "full",
  shift = "right",
}: Props) {
  return (
    <div
      className={`${
        width === "full" ? "max-w-6xl" : "w-1/2"
      } h-full flex flex-col justify-center mx-auto relative rounded-md ${bgColor}`}
    >
      {/* This is the white overlay - Over the blue background */}
      <div
        className={`absolute bg-main-white w-full h-full ${
          shift === "right" ? "ml-4" : "mr-4"
        } mt-4 shadow-lg rounded-md`}
      ></div>

      <div className="relative z-1">{children}</div>
    </div>
  );
}
