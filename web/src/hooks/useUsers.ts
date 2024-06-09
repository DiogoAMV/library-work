import api from "@/services/api";
import { User } from "@/types/User";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const useUsers = () => {
  const { data, error, isLoading } = useSWR<User[]>("/users", fetcher);
  const { mutate } = useSWRConfig();

  const createUser = async ({ user }: { user: User }) => {
    try {
      const response = await api.post("/users", user);
      mutate("/users");
      console.log(response);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const editUser = async ({ body, id }: { body: User; id: string }) => {
    try {
      const response = await api.put(`/users/${id}`, body);
      mutate("/users");
      console.log(response);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      mutate("/users");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return { users: data, isLoading, error, deleteUser, createUser, editUser };
};

export default useUsers;
