import React, { useState } from "react";
import Customer from "./Customer/Customer";
import Seller from "./Seller/Seller";

const CreateAccount = () => {
  document.body.style.backgroundColor = "white";

  const [isCustomer, setIsCustomer] = useState(true);
  return (
    <div>
      {isCustomer ? (
        <Customer
          onCustomer={() => setIsCustomer(true)}
          onSeller={() => setIsCustomer(false)}
        />
      ) : (
        <Seller
          onCustomer={() => setIsCustomer(true)}
          onSeller={() => setIsCustomer(false)}
        />
      )}
    </div>
  );
};

export default CreateAccount;
