import React from "react";
import { formatCurrency } from "../helper";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;

  return (
    <div className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency (amount)} Budgeted </p>
      </div>
      <progress max={amount} value="100">
         <div className="progress-text">
            <small>...spent</small>
            <small>...remaining</small>
         </div>
      </progress>
    </div>
  );
};

export default BudgetItem;
