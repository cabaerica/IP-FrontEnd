import React from 'react'
import "../stylesheets/checkout.css";
import "../LOGO/rsz_1rsz_1rsz_1buyit-logo2.png"
const Checkoutt = () => {

    var stateObject = {
        "USA": { "Delhi": [],
            "Kerala": [],
            "Goa": [],
        },
        "India": { "Delhi": [],
            "Kerala": [],
            "Goa": [],
        },
        "Australia": {
            "South Australia": [],
            "Victoria": []
        }, "Canada": {
            "Alberta": [],
            "Columbia": []
        },
    }

    window.onload = function () {
        var countySel = document.getElementById("country"),
            stateSel = document.getElementById("state");
        for (var country in stateObject) {
            countySel.options[countySel.options.length] = new Option(country, country);
        }
        countySel.onchange = function () {
            stateSel.length = 1; // remove all options bar first
            if (this.selectedIndex < 1) return; // done
            for (var state in stateObject[this.value]) {
                stateSel.options[stateSel.options.length] = new Option(state, state);
            }
        }
        countySel.onchange(); // reset in case page is reloaded
        stateSel.onchange = function () {
            if (this.selectedIndex < 1) return; // done
        }
    }


    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <div className="text-center" style={{paddingTop:'2vh'}}>
                    <img className="d-block mx-auto mb-4"
                         src={require('../LOGO/rsz_1rsz_1rsz_1buyit-logo2.png')} alt="" width="100%"
                         height="auto"/>
                    <h1 id={"checkoutTitle"}>Checkout</h1>
                    </div>
                </div>
                <div className="col-md-8 order-md-1" style={{paddingTop:'2vh'}}>
                    <h4 className="mb-3 title" style={{paddingTop:'2vh'}}>Billing address</h4>
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="h5">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder=""
                                       required></input>
                                    <div className="invalid-feedback"> Valid first name is required.</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="h5">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder=""
                                       required=""></input>
                                    <div className="invalid-feedback"> Valid last name is required.</div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="h5">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username"
                                       required=""></input>
                                    <div className="invalid-feedback" style={{width:'100%'}}> Your username is required.
                                    </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="h5">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                                <div className="invalid-feedback"> Please enter a valid email address for shipping
                                    updates.
                                </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="h5">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                   required=""></input>
                                <div className="invalid-feedback"> Please enter your shipping address.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address2" className="h5">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country" className="h5">Country</label>
                                <select className="form-select d-block w-100" id="country" required="">
                                    <option >Choose...</option>
                                </select>
                                <div className="invalid-feedback"> Please select a valid country.</div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state" className="h5">State</label>
                                <select className="form-select d-block w-100" id="state" required="">
                                    <option>Choose...</option>
                                </select>
                                <div className="invalid-feedback"> Please provide a valid state.</div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip" className="h5">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required=""></input>
                                    <div className="invalid-feedback"> Zip code required.</div>
                            </div>
                        </div>
                        <hr className="mb-4"/>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="same-address"></input>
                                    <label className="custom-control-label h6" htmlFor="same-address">Shipping address is
                                        the same as my billing address</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="save-info"></input>
                                    <label className="custom-control-label h6" htmlFor="save-info">Save this information
                                        for next time</label>
                            </div>
                            <hr className="mb-4"/>
                                <h4 className="mb-3 h4">Payment</h4>
                                <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio"
                                               className="custom-control-input"  required=""></input>
                                            <label className="custom-control-label h6" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio"
                                               className="custom-control-input" required=""/>
                                            <label className="custom-control-label h6" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio"
                                               className="custom-control-input" required=""/>
                                            <label className="custom-control-label h6" htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name" className="h5">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder=""
                                               required=""></input>
                                            <small className="text-muted">Full name as displayed on card</small>
                                            <div className="invalid-feedback"> Name on card is required</div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-number" className="h5">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder=""
                                               required=""></input>
                                            <div className="invalid-feedback"> Credit card number is required</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration" className="h5">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder=""
                                               required=""></input>
                                            <div className="invalid-feedback"> Expiration date required</div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-cvv" className="h5">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder=""
                                               required=""></input>
                                            <div className="invalid-feedback"> Security code required</div>
                                    </div>
                                </div>
                                <hr className="mb-4"/>
                                <button className="btn btn-primary btn-lg btn-block" type="submit" style={{backgroundColor: "#4A1C49" , borderColor:"#4A1C49"}}>Finish order
                                </button>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Checkoutt;
