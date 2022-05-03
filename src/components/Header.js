import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
} from "react-bootstrap";
import "../stylesheets/header.css";
import "../stylesheets/App.css";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "../LOGO/rsz_1rsz_1rsz_1buyit-logo2.png"

const Header = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState();

    return (
        <Navbar className="navbar-color" variant="dark" style={{ height: 80 }} >
            <Container>
                <Navbar.Brand>
                   <img className="img" src={require('../LOGO/rsz_1rsz_1rsz_1buyit-logo2.png')} alt="Not found" width="150" height="150"/>
                </Navbar.Brand>
                <Nav
                    className="mybtn me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScrollz
                >
                    <Nav.Link className="productsbtn" href="products">Products</Nav.Link>
                    <Nav.Link className="cartbtn" href="cart">Cart</Nav.Link>
                    <Nav.Link className="accountbtn" href="user">Account</Nav.Link>
                    <Nav.Link className="favouritesbtn" href="favourites">Favourites</Nav.Link>
                </Nav>
                {useLocation().pathname.split("/")[1] !== "cart" && (
                    <Navbar.Text className="search">
                        <FormControl
                            style={{ width: 500 }}
                            type="search"
                            placeholder="Search a product..."
                            className="m-auto"
                            aria-label="Search"
                            onChange={(e) => {
                                productDispatch({
                                    type: "FILTER_BY_SEARCH",
                                    payload: e.target.value,
                                });
                            }}
                        />
                    </Navbar.Text>
                )}
                <Nav>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle className="dropdownsucc" style={{backgroundColor: "#4A1C49" , borderColor:"#4A1C49"}}>
                            <FaShoppingCart className="facart" color="#D6BBC0" fontSize="25px"/>
                            <Badge className="badge1">{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdownmenu" style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                      <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>RON {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                              dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: prod,
                              })
                          }
                      />
                    </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button className="btn-cart" style={{ width: "95%", margin: "0 10px",color:"#D6BBC0"}}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10, fontWeight: "bold" }}>Cart is Empty!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;