import { useState, useEffect } from "react";
import expenseService from "../services/expenseService.js"

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormData(){
  const [transactions, setTransactions] = useState([]);
  const [fromData, setFormData] = useState({
    name: "",
    value: "",
    category: "",
    reason:  "",
    date: ""
  });

  const fetchTransactions = async () => {
    const response = axios.get("/transactions/")
    setFormData(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await expenseService.post('/transactions/', formData);
    fetchTransactions();

  }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apelido da Despesa</Form.Label>
          <Form.Control type="text" placeholder="Dê um nome à essa despesa"/>
        </Form.Group>

        <Form.Group  className="mb-3" controlId="formExpenseValue">
          <Form.Label>Valor da Despesa</Form.Label>
          <Form.Control type="number" placeholder="R$ 0,00"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="FormCategoryText">
          <Form.Label>Categoria da Despesa</Form.Label>
          <Form.Control type="text" placeholder="Alimentação"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="FormReasonText">
          <Form.Label>Motivo da Despesa</Form.Label>
          <Form.Control type="text" placeholder="Compras de casa"/>
        </Form.Group>

        <Button className="p-2">Criar Registro</Button>
      </Form>
    </Container>
  );
}

export default FormData;
