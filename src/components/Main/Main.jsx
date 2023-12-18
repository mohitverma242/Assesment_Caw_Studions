import { useSelector } from "react-redux";
import style from "./Main.module.css"
import { LiaGreaterThanSolid } from "react-icons/lia";


const Main=()=>{
    const post=useSelector((state)=>state.list.menu)
    console.log(post)
    return(
   <div className={style.mainContainer}>

    <div className={style.orderContainer}>
        <span>Orders  <LiaGreaterThanSolid className={style.greatContianer}/>32457ABC</span>
        <span className={style.orderNumber}>Order 32457ABC</span>
        </div>
    <div className={style.btnContainer}>
        <div>
    <button className={style.btnApprove}>Approve order</button>
   </div>
   <div>
   <button className={style.btnBack}> Back</button>
   </div>
   </div> 
   </div>
    )
}

export default Main;