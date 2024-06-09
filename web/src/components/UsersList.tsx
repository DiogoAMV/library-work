import useUsers from "@/hooks/useUsers";
import Spinner from "./Spinner";
import UserRow from "./UserRow";

const UsersList = (): JSX.Element => {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Spinner />;

  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, i) => (
            <UserRow user={user} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
