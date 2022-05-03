import React from 'react'
import "../stylesheets/footer.css";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Footer = () => {

    return (
        <div className={"footer"}>
            <div className={"container"}>
                <div className={"row"}>
                    {/*Column 1*/}
                    <div className={"footer-col"}>
                        <h4>Contact </h4>
                        <ul className={"list-unstyled"}>
                            <li>Iasi, Romania</li>
                            <li>Str. ...</li>
                            <li>+40746719801</li>
                            <li className={"email-id"}>buyit@shop.com</li>
                        </ul>
                    </div>
                    {/*<script type={"text/javascript"}>*/}
                    {/*    function changeColor(obj) {*/}
                    {/*       if(obj.style.color == #C585B3)*/}
                    {/*           obj.style.color = #D6BBC0;*/}
                    {/*    }*/}
                    {/*</script>*/}

                    {/*Column 2*/}
                    <div className={"footer-col"}>
                        <h4> Shipping </h4>
                        <ul className={"list-unstyled"}>
                            <li><a href={"#"}>Orders Shipping</a></li>
                            <li><a href={"#"}>Payment</a></li>
                            <li><a href={"#"}>FAQ</a></li>
                        </ul>
                    </div>
                    {/*Column 3*/}
                    <div className={"footer-col"}>
                        <h4> Suport </h4>
                        <ul className={"list-unstyled"}>
                            {/*<li>onmouseover="changeColor(this)" onmouseout="changeColor(this)" <a href={"#"}>content 4</a></li>*/}
                            <li><a href={"#"}>Product Return Form</a></li>
                            <li><a href={"#"}>Service and Guarantees</a></li>
                            <li><a href={"#"}>MyAccount</a></li>
                        </ul>
                    </div>
                    {/*Newsletter*/}
                    <div className={"footer-col"}>
                        <h5>Newsletter</h5>
                        <Form className="email-form">
                            <FormControl
                                type="Email"
                                placeholder="Your email address here"
                                className="mailadd"
                                aria-label="Enter"
                            />
                            <Button>I'm in!</Button>
                        </Form>

                        <br></br>
                        <h5>Follow Us</h5>
                        <div className={"social-links"}>
                            <ul className={"social-icons"}>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={"row"}>
                    <p className={"col-sm"}>
                        {/*Insert tags here when available */}
                        &copy;{new Date().getFullYear()} BUY IT | All rights reserved | <a href={"#"}>Terms Of Service </a> | <a href={"#"}>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
