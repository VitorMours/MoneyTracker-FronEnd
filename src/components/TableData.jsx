import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useTransactions } from "../context/TransactionContext";

function TableData() {
  const { transactions } = useTransactions();

  return (
    <Container className="mt-5">
      <h3>Tabela de Despesas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apelido</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Motivação</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transactions, index) => (
            <tr key={index}>
              <td>{transactions.name}</td>
              <td>R$ {Number(transactions.value).toFixed(2)}</td>
              <td>{transactions.category}</td>
              <td>{transactions.reason}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableData;
