import { InputHTMLAttributes, MouseEventHandler } from "react";
import { IconType } from "react-icons";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showPassword?: boolean;
  Icon?: IconType;
}

const Input = ({
  label,
  Icon,
  error,
  showPassword,
  onClick,
  ...props
}: InputProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Icon />
          </div>
        )}

        <input
          onChange={props.onChange}
          value={props.value}
          defaultValue={props.defaultValue}
          name={props.name}
          type={props.type}
          id={props.id}
          className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-violet-500 focus:ring-0 outline-none block w-full ps-10 p-2.5 transition-all duration-300 ${
            props.disabled && "bg-gray-300 cursor-not-allowed"
          } `}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
        {props.name === "password_hash" && (
          <button
            onClick={onClick as MouseEventHandler<HTMLButtonElement>}
            className="absolute inset-y-0 end-5 flex items-center ps-3.5 hover:text-violet-500 transition-all"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
