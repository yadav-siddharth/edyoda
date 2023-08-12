import React, { useState } from "react";
import "./form.css";
import clock from "../../assests/Icon Clock.png";
import tick from "../../assests/Radio Button.png";
import empty from "../../assests/empty.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./data";

const Form = () => {
  const [selectedPlan, setSelectedPlan] = useState(data[0]);
  const [totalPrice, setTotalPrice] = useState(selectedPlan.price);
  const [discount, setDiscount] = useState(selectedPlan.disprice);
  const [click, setClick] = useState(false);

  const handlePlanChange = (item) => {
    setSelectedPlan(item);
    setTotalPrice(item.price);
    setDiscount(item.disprice);
  };

  const handleClick = () => setClick(!click);

  const handleCancel = () => {
    setTotalPrice("₹18,500");
    setDiscount("₹0");
    setSelectedPlan("");
    toast.error("You have Canceled the subcription")
  };

  const notify = () => toast.success("Thank you for the response!");

  return (
    <div>
      <form className="plan-chooser">
        <div className="steps">
          <div className="signup">1</div>
          <div className="subscribe">2</div>
        </div>
        <div className="header-form">
          <span className="title">Select your subcription plan</span>
        </div>
        {data.map((item, id) => (
          <div
            className={
              selectedPlan.id === item.id ? "plan-option" : "plan-option"
            }
            key={id}
            onClick={() => handlePlanChange(item)}
          >
            <input value="monthly" name="plan" type="radio" />
            <label htmlfor="monthly">
              <div className="plan-info" onClick={handleClick}>
                <span className="plan-cost">
                  {" "}
                  {selectedPlan.id === item.id ? (
                    <img src={tick} />
                  ) : (
                    <img src={empty} />
                  )}
                  {item.name}
                </span>
                <span className="plan-name">Total {item.price}</span>
              </div>
            </label>
          </div>
        ))}

        <div className="subsc-calculation">
          <div className="text-container">
            <span className="subs-fee">Subscription Fee</span>
            <span className="total">₹18,500</span>
          </div>
        </div>
        <div className="offer">
          <div className="alert-header">
            <span className="alert-offer">Limited time offer</span>
            <span className="offer-price">- {discount}</span>
          </div>
          <div className="alert-date">
            <img src={clock} alt="clock" />
            <span className="date">Offer valid till 25th Sept 2023 </span>
          </div>
        </div>
        <div className="total-offer">
          <span className="discount-price">
            Total <pre>(Incl. of 18% GST)</pre>
          </span>
          <span className="dis-price">{totalPrice}</span>
        </div>
        <div className="btn-grp">
          <button  className="choose-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button   className="choose-pay" onClick={notify}>
            Proceed to Pay
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Form;
