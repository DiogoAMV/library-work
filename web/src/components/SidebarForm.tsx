import Input from "./Input";
import { FaRegUserCircle, FaCheck } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { IoKeySharp } from "react-icons/io5";

interface SidebarFormProps {
  isEditing?: boolean;
  isOpen?: boolean;
  handleToggle: () => void;
}

const SidebarForm = ({
  isEditing,
  handleToggle,
}: SidebarFormProps): JSX.Element => {
  return (
    <div>
      <section className="flex absolute z-20 right-0 flex-col items-center bg-zinc-100 h-full w-96 p-8 transition-all">
        <div>
          <h1 className="text-black font-semibold text-2xl">
            {isEditing ? "Editar usuário" : "Criar usuário"}
          </h1>
        </div>
        <form
          className="flex flex-col w-full gap-8 my-8 justify-between h-full"
          action=""
        >
          <div className="flex flex-col gap-8">
            {isEditing && (
              <>
                <Input
                  label="Id"
                  placeholder="123"
                  type="number"
                  Icon={IoKeySharp}
                  disabled
                />
              </>
            )}
            <Input
              label="Username"
              placeholder="Zé da manga"
              type="text"
              error="saporra aqui ta com erro"
              Icon={FaRegUserCircle}
            />
            <Input
              label="Email"
              placeholder="zedamanga@email.com"
              type="email"
              Icon={IoMailOutline}
            />
            <Input
              label="Password"
              placeholder="********"
              type="password"
              Icon={MdOutlinePassword}
            />

            {isEditing && (
              <>
                <Input
                  label="Created At"
                  placeholder="dd/mm/yyyy"
                  type="date"
                  Icon={LuCalendar}
                />
              </>
            )}
          </div>
          <button
            className="w-full  bg-violet-500 text-white px-4 py-2 h-[42px] overflow-hidden rounded-md hover:bg-transparent duration-300 border-[1px] hover:border-violet-500 transition-all group"
            type="submit"
          >
            <div className="flex flex-col items-center gap-4  group-hover:-translate-y-9 transition-all duration-300">
              {isEditing ? "Editar usuário" : "Criar usuário"}
              <span className="text-violet-500">
                <FaCheck />
              </span>
            </div>
          </button>
        </form>
      </section>
      <div
        onClick={handleToggle}
        className={`bg-zinc-900/50 flex h-screen absolute z-10 items-center justify-end w-screen overflow-hidden`}
      />
    </div>
  );
};

export default SidebarForm;
