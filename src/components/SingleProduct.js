import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "./header.css";

const SingleProduct = (product) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    console.log(product)


    function addToCart() {
        console.log("added to the cart")
    }

    function removeFromCart() {
        console.log("removed from the cart")
    }
    //id = {product.id} name = {product.name} rating = {product.rating} image = {product.files[0].base64} price = {product.price}product.files[0]
    return (
        <div className="products">

            <Card>
                <Card.Img variant="top" src={product.image}  />
                <Card.Body>
                    <Card.Title className = "product__title">{product.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>{product.price} RON</span>

                        <Rating rating={product.rating} />
                    </Card.Subtitle>
                    <Button
                            variant="success"
                            onClick={() => addToCart()}
                    >
                            Add to Cart
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() => removeFromCart()}
                    >
                        Remove from Cart
                    </Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;