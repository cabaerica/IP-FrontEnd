import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {cart.map((prod) => (
                        <ListGroup.Item style={{backgroundColor:"#D0A3BF"}} key={prod.id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={prod.image} alt={prod.name} fluid rounded />
                                </Col>
                                <Col md={2}>
                                    <span style={{fontStyle:"Candara", fontWeight:"bold"}}>{prod.name}</span>
                                </Col>
                                <Col style={{fontStyle:"Candara", fontWeight:"bold"}} md={2}>RON {prod.price}</Col>
                                <Col md={2}>
                                    <Rating style={{color:"yellow"}} rating={prod.ratings} />
                                </Col>
                                <Col md={2}>
                                    <Form.Control
                                        as="select"

                                        style={{ color: "white",backgroundColor: "#4A1C49" , borderColor:"#4A1C49"}}
                                        value={prod.qty}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: prod.id,
                                                    qty: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        {[...Array(prod.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button
                                        type="button"
                                        variant="light"
                                        style={{ color: "white",backgroundColor: "#4A1C49" , borderColor:"#4A1C49"}}
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                            })
                                        }
                                    >
                                        <AiFillDelete fontSize="20px" />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title">Subtotal ({cart.length}) items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: RON {total}</span>
                <Button style={{backgroundColor: "#4A1C49" , borderColor:"#4A1C49"}} type="button" disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
};

export default Cart;