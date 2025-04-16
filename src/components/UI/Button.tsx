interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "lg" | "md";
  onClick: () => void;
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const buttonVariants = {
  primary: "bg-purple-700 text-white",
  secondary: "bg-purple-500 text-white-500",
};
const buttonSizes = {
  sm: "px-2 py-1 text-sm rounded-sm",
  md: "px-4 py-2 text-md rounded-md",
  lg: "px-6 py-3 text-xl rounded-xl",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${buttonVariants[props.variant]} ${buttonSizes[props.size]}`}
      onClick={props.onClick}
    >
      <div className="flex items-center">
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </div>
    </button>
  );
};
