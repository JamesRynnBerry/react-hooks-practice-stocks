import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])

  const [ sortBy, setSortBy ] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])

  useEffect(() => {
    if(sortBy === 'Alphabetically'){
      return [...stocks]
    }
  }, [ sortBy ])

  const sortStocks = (e) => {
    setSortBy(e.target.value)
  }

  // const sortByName = () => { 
  //   return [...stocks].sort(function(a, b) {
  //     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  // }

  const buyStock = (stock) => {
    if(!myStocks.includes(stock)){
      const updatedMyStocks = [...myStocks, stock]
      setMyStocks(updatedMyStocks)
    }else{
      alert('chill')
    }
    
    const sellStock = (stock) => {
      const updatedMyStocks = [...myStocks].filter(myStock => myStock.id !== stock.id)
      setMyStocks(updatedMyStocks)
    }
  }

  return (
    <div>
      <SearchBar sortStocks={sortStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} buyStock={buyStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
