import { useSelector } from "react-redux";
import "./Body.css"
import { useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { WiSnowflakeCold } from "react-icons/wi";
import { GiMushroom } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";


const Body=()=>{
    const total=useSelector((state)=>state.list.totalPrice)
    const [date,setDate]=useState()
    useEffect(()=>{
    const d=new Date()
    setDate(d.toDateString())
},[])

    return (
        <div className="container-lg my-5 mt-4">
        <div className="row row-cols-6 mt-3 border rounded-top">
          <div className="col border">
              <span>Supplier</span>
              <h5>East coast fruits & vegetable</h5>
              </div>
          <div className="col border d-grid">Shipping date <span className="datContainer">{date}</span></div>
          <div className="col border d-grid">Total <span className="valContainer">{total.toFixed(2)}</span> </div>
          <div className="col border d-grid gap-2">Category <span><IoFastFoodOutline /><WiSnowflakeCold /><GiMushroom /><GiFruitBowl />
</span></div>
          <div className="col border d-grid">Department <span className="depContainer">300-444-678</span></div>
          <div className="col border d-grid">Status<span className="statContainer">waiting for your approval</span> </div>
      </div>

         </div>
    )
}

export default Body;