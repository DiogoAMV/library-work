import "moment/dist/locale/pt-br";
import "moment/locale/pt-br";
import api from "@/services/api";
import { User } from "@/types/User";
import moment from "moment";
import { toast } from "sonner";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data);
moment.locale("pt-br");

const useUsers = () => {
  const { data, error, isLoading } = useSWR<User[]>("/users", fetcher);
  const { mutate } = useSWRConfig();

  const createUser = async (user: User) => {
    try {
      const response = await api.post("/users", user);
      mutate("/users");
      console.log(response);
      toast("Usuário criado com sucesso!", {
        description: moment().format("LLLL"),
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const editUser = async (body: User) => {
    try {
      const response = await api.put(`/users/${body.user_id}`, body);
      mutate("/users");
      console.log(response);
      toast("Usuário editado com sucesso!", {
        description: moment().format("LLLL"),
      });
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      mutate("/users");
      toast("Usuário apagado com sucesso!", {
        description: moment().format("LLLL"),
      });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return { users: data, isLoading, error, deleteUser, createUser, editUser };
};

export default useUsers;
