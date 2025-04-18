import NavBar from "./components/NavBar";
import FormData from "./components/FormData";
import TableData from "./components/TableData";
import { TransactionProvider } from "./context/TransactionContext"; // Alterado de TransactionContext para TransactionProvider


function App() {
  return (
    <TransactionProvider>
      <NavBar />
      <FormData />
      <TableData/>
    </TransactionProvider>
  );
}

export default App;