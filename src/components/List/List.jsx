import style from "./List.module.css"
import { FiPrinter } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState} from "react";
import Data from "../../Data.json"
import { useDispatch, useSelector } from "react-redux";
import { add_Data, decrement, increment,editHandler,msgHandler,totalValue,popHandler,changeStatus} from "./listSlice";
import {Modal} from "bootstrap"
import Applegreen from "../../assets/Apple Green Smith.png"


const List=()=>{
    const dispatch=useDispatch()
    const post=useSelector((state)=>state.list.menu)
    const editableItem=useSelector((state)=>state.list.editItem)
    const total=useSelector((state)=>state.list.totalPrice)
    const isApproved=useSelector((state)=>state.list.isApproved)
    const isMissing=useSelector((state)=>state.list.isMissing)
    const status=useSelector((state)=>state.list.statusId)
    const edit=useSelector((state)=>state.list.editind)
 
    useEffect(()=>{
        dispatch(add_Data(Data))
        dispatch(totalValue())
    },[])
console.log(post)
console.log(editableItem)
console.log(total)
console.log(isMissing,isApproved)
console.log(status)
console.log(edit)

    return (
  <div className="container border rounded-top mt-2">
    <div className={style.searchContainer}>
        <div className={style.sContainer}>
    <input type="text" placeholder="Search" className={style.inputContainer}/>
    <CiSearch />
</div>
    <div className={style.iconContainer}>
     <button className="btn btn-primary bg-light border-success text-success fw-bold p-1 rounded-pill fs-6">Add item</button>
     <FiPrinter />
     </div>
   
    </div>
    <div className="container border rounded-top shadow">
     <div>
          <div className={style.col}>
              <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    {post.map((ele)=>
    <tr key={ele.id}>
      <th scope="row d-grid"><img src={Applegreen} className={style.image}/>{ele.ProductName}</th>
      <td>{ele.Brand}</td>
      <td>{ele.Price}</td>
      <td>{ele.Quantity} &times; <span className={style.quantContainer}>6*1LB</span></td>
      <td>{parseFloat(ele.Price.replace("$","")* parseInt(ele.Quantity)).toFixed(2)}</td>
      <td>{ele.isApproved && !ele.isMissing ? <span className={style.st1Container}>Approved</span>: " "}{ele.isMissing && !isApproved ?<span className={style.st2Container}>Missing urgent</span>:""} {!ele.isApproved && !ele.isMissing?(<TiTick className={style.tickContainer} onClick={()=>dispatch(msgHandler(ele.id))}/>):""}
        <button type="button" className="btn btn-light border-0 text-success" data-bs-toggle="modal" data-bs-target="#secondModal">
          <RxCross1 className={style.crossContainer}  onClick={()=>dispatch(popHandler(ele.id))}/>
</button>
<button type="button" className="btn btn-light border-0 text-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>dispatch(editHandler(ele.id))}>
  Edit
</button>

<div className="modal fade" id="secondModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Missing Product</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body d-flex gap-5 fw-bold">
          Is this {ele.ProductName} is urgent?
      </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>dispatch(changeStatus())}>yes</button>
          <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>   
  <div key={ele.id} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body d-flex gap-5 fw-bold">
  <img src={Applegreen} alt="product image" className={style.image}/>
  <div className={style.modalContainer}>
   <span>Product Name</span> <span>:</span> <span>{ele.ProductName}</span>
   <span>Quantity</span><span>:</span>  <span className={style.quant}><button className="btn btn-success rounded-circle  m-2 border-0" onClick={()=>dispatch(increment(ele.id))}>+</button>{ele.Quantity}<button className="btn m-2 btn-success  rounded-circle border-0" onClick={()=>dispatch(decrement(ele.id))} disabled={ele.Quantity<=1}>-</button></span>
   <span>Total</span> <span>:</span> <span>{parseFloat(ele.Price.replace("$","")* parseInt(ele.Quantity))}</span>
  </div>
    </div>
    <p className={style.headContainer}>Choose reason</p>
    <div className={style.inpContainer}>
      <input type="checkbox"/>
       <label>missing</label>
       <input type="checkbox"/>
       <label>Quantity is not the same</label>
       <input type="checkbox"/>
       <label>Price is not the same</label>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>dispatch(totalValue())}>Save changes</button>
      </div>
    </div>
  </div>
</div>
 </td>
    </tr>
    
)}

  </tbody>
</table>
        
          </div>
      </div>
</div>
</div>
    )
}

export default List;