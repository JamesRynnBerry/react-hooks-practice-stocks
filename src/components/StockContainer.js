import React, {useState} from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock }) {
  console.log(stocks)


  return (
    <div>
      <h2>Stocks</h2>
        {
          stocks.map(stock => (
          <Stock key={stock.id} stock={stock} buyStock={buyStock}/>
      ))
        }
    </div>
  );
}

export default StockContainer;
