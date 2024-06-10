import SidebarForm from "./components/SidebarForm";
import UsersList from "./components/UsersList";
import GenericButton from "./components/GenericButton";
import { FiUserPlus } from "react-icons/fi";
import { Sheet, SheetTrigger } from "./components/ui/sheet";
import { Toaster } from "sonner";

function App() {
  return (
    <main className="font-poppins">
      <div className="flex flex-col py-32 items-center justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <GenericButton
              Icon={FiUserPlus}
              className="max-w-fit my-4"
              text="Criar usuário"
            />
          </SheetTrigger>
          <SidebarForm />
        </Sheet>
        <UsersList />
      </div>
      <Toaster />
    </main>
  );
}

export default App;
