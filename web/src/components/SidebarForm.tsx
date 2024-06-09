import Input from "./Input";
import { FaRegUserCircle, FaCheck } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { IoKeySharp } from "react-icons/io5";
import { SheetClose, SheetContent, SheetHeader } from "@/components/ui/sheet";
import GenericButton from "./GenericButton";
import { User } from "@/types/User";
import { useFormik } from "formik";
import { validationSchema } from "@/schemes/users.scheme";
import useUsers from "@/hooks/useUsers";

interface SidebarFormProps {
  user?: User;
  isEditing?: boolean;
  isOpen?: boolean;
}

const SidebarForm = ({ isEditing, user }: SidebarFormProps): JSX.Element => {
  const { createUser, editUser } = useUsers();

  const initialValues: User = {
    user_id: user?.user_id ?? null,
    username: user?.username ?? "",
    email: user?.email ?? "",
    password_hash: user?.password_hash ?? "",
    created_at: user?.created_at ?? "",
  };

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (isEditing) {
        setFieldValue("created_at", new Date(values.created_at).toISOString());
        editUser(values);
      } else {
        await createUser(values);
      }
      resetForm();
    },
  });

  return (
    <SheetContent className="flex flex-col items-center bg-zinc-100 p-8 transition-all">
      <SheetHeader>
        <h1 className="text-black font-semibold text-2xl">
          {isEditing ? "Editar usuário" : "Criar usuário"}
        </h1>
      </SheetHeader>
      <div className="flex flex-col w-full gap-8 my-8 justify-between h-full">
        <div className="flex flex-col gap-8">
          {isEditing && (
            <Input
              name="user_id"
              onChange={handleChange}
              value={values.user_id?.toString()}
              label="Id"
              placeholder="123"
              type="number"
              Icon={IoKeySharp}
              disabled
              error={errors.user_id}
            />
          )}
          <Input
            name="username"
            onChange={handleChange}
            value={values.username}
            label="Username"
            placeholder="Zé da manga"
            type="text"
            Icon={FaRegUserCircle}
            error={errors.username}
          />
          <Input
            onChange={handleChange}
            value={values.email}
            name="email"
            label="Email"
            placeholder="zedamanga@email.com"
            type="email"
            Icon={IoMailOutline}
            error={errors.email}
          />

          <Input
            onChange={handleChange}
            value={values.password_hash}
            name="password_hash"
            label="Password"
            placeholder="********"
            type="password"
            Icon={MdOutlinePassword}
            error={errors.password_hash}
          />

          {isEditing && (
            <Input
              onChange={handleChange}
              value={values.created_at}
              name="created_at"
              label="Created At"
              placeholder="dd/mm/yyyy"
              type="datetime-local"
              Icon={LuCalendar}
              error={errors.created_at}
            />
          )}
        </div>
        <SheetClose>
          <GenericButton
            onClick={() => handleSubmit()}
            disabled={Object.keys(errors).length > 0}
            className="w-full"
            text={isEditing ? "Editar usuário" : "Criar usuário"}
            Icon={FaCheck}
          />
        </SheetClose>
      </div>
    </SheetContent>
  );
};

export default SidebarForm;
