import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "/FrontEnd_IP/IP-FrontEnd/src/stylesheets/singleproduct.css";

const SingleProduct = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className="products">
            <Card className="card1" style={{backgroundColor:"#D0A3BF" ,borderStyle:"solid",borderWidth:"5px",borderColor:"#612e53",fontFamily:"Candara", fontWeight:"bold"}}>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body className="card-body">
                    <Card.Title className="cardtitle">{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span style={{fontStyle:"Candara", fontWeight:"bold"}}>RON {prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (
                            <div style={{fontStyle:"Candara", fontWeight:"bold"}}>Fast Delivery</div>
                        ) : (
                            <div style={{fontStyle:"Candara", fontWeight:"bold"}}>4 days delivery</div>
                        )}
                        <Rating style={{color:"#FFFF00"}} rating={prod.ratings} />
                    </Card.Subtitle>
                    {cart.some((p) => p.id === prod.id) ? (
                        <Button
                            variant="danger"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                })
                            }
                        >
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button style={{backgroundColor: "#4A1C49" , borderColor:"#4A1C49"}}
                            onClick={() =>
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod,
                                })
                            }
                            disabled={!prod.inStock}
                        >
                            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;