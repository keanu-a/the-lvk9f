type Props = {
  children: React.ReactNode;
  bgColor?: string;
  width?: "full" | "half" | "fit";
  shift?: "right" | "left";
  shadowColor?: "main" | "secondary" | "yellow" | "red";
};

export default function ColorContainer({
  children,
  bgColor,
  width = "full",
  shift = "right",
  shadowColor = "main",
}: Props) {
  const getShadowClass = () => {
    if (shift === "right") return `shadow-shift-right-${shadowColor}`;
    if (shift === "left") return `shadow-shift-left-${shadowColor}`;
    return "";
  };

  return (
    <div
      className={`rounded-lg h-full justify-center text-center relative 
        ${bgColor} 
        ${width === "full" && "max-w-6xl"}
        ${getShadowClass()}`}
    >
      <div className="h-full relative z-1 p-8 flex flex-col gap-4 justify-center text-center">
        {children}
      </div>
    </div>
  );
}
