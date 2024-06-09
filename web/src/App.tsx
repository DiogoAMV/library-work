import { useCallback, useState } from "react";
import SidebarForm from "./components/SidebarForm";
import UsersList from "./components/UsersList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebarForm = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <main className="font-poppins">
      {isOpen && (
        <SidebarForm
          handleToggle={handleToggleSidebarForm}
          isEditing
          isOpen={isOpen}
        />
      )}
      <div className="flex flex-col py-32 items-center justify-center">
        <button
          className="bg-violet-500 text-white px-4 py-2 rounded-md"
          onClick={handleToggleSidebarForm}
        >
          Abrir
        </button>
        <UsersList />
      </div>
    </main>
  );
}

export default App;
