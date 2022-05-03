import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "../stylesheets/filter.css"

const Filters = () => {
    const {
        productDispatch,
        productState: { byStock, byFastDelivery, sort, byRating },
    } = CartState();

    // make state for rating

    return (
        <div className="filters">
            <span className="title" style={{ color:"#D6BBC0"}}>Filter Products</span>
            <span>
            <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                style={{color:"#D6BBC0"}}
                id={`inline-1`}
                onChange={() =>
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh",
                    })
                }
                checked={sort === "lowToHigh" ? true : false}
            />
          </span>
                <span>
            <Form.Check
                inline
                label="Descending"
                name="group1"
                style={{color:"#D6BBC0"}}
                type="radio"
                id={`inline-2`}
                onChange={() =>
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow",
                    })
                }
                checked={sort === "highToLow" ? true : false}
            />
          </span>
                <span>
            <Form.Check
                inline
                label="Include Out of Stock"
                name="group1"
                style={{color:"#D6BBC0"}}
                type="checkbox"
                id={`inline-3`}
                onChange={() =>
                    productDispatch({
                        type: "FILTER_BY_STOCK",
                    })
                }
                checked={byStock}
            />
          </span>
                <span>
            <Form.Check
                inline
                label="Fast Delivery Only"
                name="group1"
                style={{color:"#D6BBC0"}}
                type="checkbox"
                id={`inline-4`}
                onChange={() =>
                    productDispatch({
                        type: "FILTER_BY_DELIVERY",
                    })
                }
                checked={byFastDelivery}
            />
          </span>
                <span>
            <label style={{ paddingRight: 10, color:"#D6BBC0" }}>Rating: </label>
            <Rating
                rating={byRating}

                onClick={(i) =>
                    productDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i + 1,
                    })
                }
                style={{ cursor: "pointer", color:"#FFFF00" }}
            />
          </span>
            <Button
                style={{backgroundColor: "#4A1C49" , borderColor:"#4A1C49",color:"#D6BBC0"}}
                onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default Filters;