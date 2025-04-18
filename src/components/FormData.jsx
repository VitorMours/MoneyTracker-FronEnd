import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTransactions } from "../context/TransactionContext";

function FormData() {
  const { addTransaction } = useTransactions(); // Correção do hook

  const [formData, setFormData] = useState({
    name: "",
    value: "",
    category: "",
    reason: "",
    date: "", // Você pode adicionar um input para essa data, se quiser usá-la
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addTransaction(formData);
    setFormData({
      name: "",
      value: "",
      category: "",
      reason: "",
      date: "",
    }); // limpa o formulário após o envio
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Apelido da Despesa</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Dê um nome à essa despesa"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExpenseValue">
          <Form.Label>Valor da Despesa</Form.Label>
          <Form.Control
            type="number"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
            placeholder="R$ 0,00"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="FormCategoryText">
          <Form.Label>Categoria da Despesa</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Alimentação"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="FormReasonText">
          <Form.Label>Motivo da Despesa</Form.Label>
          <Form.Control
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            placeholder="Compras de casa"
            required
          />
        </Form.Group>

        <Button className="p-2" type="submit">
          Criar Registro
        </Button>
      </Form>
    </Container>
  );
}

export default FormData;
