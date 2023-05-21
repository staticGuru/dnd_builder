import "./App.css";
import CreateNewTemplate from "./Components/CreateNewTemplate";
import "./Components/style.css";
import DndProvider from "./context/DndProvider";
import { AuthProvider } from "./context/Authprovider";
import AppRouter from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <DndProvider>
          <AppRouter />
        </DndProvider>
      </AuthProvider>
    </>
  );
}
export default App;
