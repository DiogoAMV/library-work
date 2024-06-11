import { User } from "@/types/User";
import moment from "moment";
import { LuTrash } from "react-icons/lu";
import { TbPencil } from "react-icons/tb";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ConfirmationModal from "./ConfirmationModal";
import useUsers from "@/hooks/useUsers";
import { Sheet, SheetTrigger } from "./ui/sheet";
import SidebarForm from "./SidebarForm";

interface UserRowProps {
  user: User;
}

const UserRow = ({ user }: UserRowProps): JSX.Element => {
  const { deleteUser } = useUsers();

  return (
    <AlertDialog>
      <tr className="bg-white border-b hover:bg-zinc-100 cursor-pointer">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {user.user_id}
        </th>
        <td className="px-6 py-4">{user.username}</td>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4">
          {moment.utc(user.created_at).format("DD/MM/YYYY")}
        </td>
        <td className=" text-red-500">
          <AlertDialogTrigger className="px-6 py-4 hover:brightness-50 transition-all border-none">
            <LuTrash />
          </AlertDialogTrigger>
        </td>
        <td className=" text-violet-500">
          <Sheet>
            <SheetTrigger asChild>
              <button className="px-6 py-4 hover:brightness-50 transition-all border-none">
                <TbPencil />
              </button>
            </SheetTrigger>
            <SidebarForm isEditing user={user} />
          </Sheet>
        </td>
      </tr>
      <ConfirmationModal
        action={() => deleteUser(user.user_id!)}
        title="Você tem certeza?"
        description="A ação a seguir não poderá ser desfeita, caso decida prosseguir, tenha em mente que o usuário será deletado para sempre da base de dados! Deseja continuar?"
      />
    </AlertDialog>
  );
};

export default UserRow;
