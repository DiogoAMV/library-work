import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface GenericButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon?: IconType;
  className?: string;
}

const GenericButton = ({
  text,
  className,
  Icon,
  ...props
}: GenericButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={`w-full   text-white px-4 py-2 h-[42px] overflow-hidden rounded-md  duration-300 border-[1px] ${
        !props.disabled &&
        "hover:border-violet-500 hover:bg-transparent bg-violet-500"
      } transition-all group ${
        props.disabled && " cursor-not-allowed bg-violet-300"
      } ${className}`}
      type="submit"
    >
      <div
        className={`flex flex-col items-center gap-4  transition-all duration-300 ${
          Icon && !props.disabled && "group-hover:-translate-y-9"
        }`}
      >
        <p className={`${!Icon && "group-hover:text-violet-500"}`}>{text}</p>
        {Icon && (
          <span className="text-violet-500">
            <Icon />
          </span>
        )}
      </div>
    </button>
  );
};

export default GenericButton;
