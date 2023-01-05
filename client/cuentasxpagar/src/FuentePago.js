import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (
        <div className="container">
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="Detalle.js">Detalle</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Adorno
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>Fuentes de Pago</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Código
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="AA-00" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Tipo de Pago</Form.Label>
                        <Col sm={10}>
                            <Form.Select defaultValue="1">
                                <option value="0">Seleccione un Tipo de Pago</option>
                                <option value="1">Efectivo</option>
                                <option value="2">Cheque</option>
                                <option value="3">Transferencia Bancaria</option>
                                <option value="4">Tarjeta de Crédito</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Estado</Form.Label>
                        <Form.Check type="switch" id="custom-switch"></Form.Check>
                    </Form.Group>
                </Row>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Número de Cuenta Bancaria
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="220444789" />
                    </Col>
                </Form.Group>
                <Button type="button" size="lg">Aceptar</Button>
                <Button type="button" size="lg">Cancelar</Button>
            </Form>
            <p>{!data ? "Loading..." : data}</p>
        </div>
    );
}
export default App;