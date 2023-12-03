type Props = {
  children: React.ReactNode;
  width?: string;
  bgColor?: string;
  shift?: string;
};

export default function ColorContainer({
  children,
  width = "full",
  bgColor,
  shift = "right",
}: Props) {
  return (
    <div
      className={`${
        width === "full" ? "w-4/6" : "w-1/2"
      } h-full flex flex-col justify-center mx-auto relative rounded-md ${bgColor}`}
    >
      {/* This is the white overlay - Over the blue background */}
      <div
        className={`absolute bg-main-white w-full h-full ${
          shift === "right" ? "ml-4" : "mr-4"
        } mt-4 shadow-md rounded-md`}
      ></div>

      <div className="relative z-1">{children}</div>
    </div>
  );
}
