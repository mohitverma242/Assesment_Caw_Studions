import { createSlice } from "@reduxjs/toolkit";


const initialState={
    menu:[],
    totalPrice:0,
    isApproved:false,
    isMissing:false,
    editItem:[],
    price:0,
    statusId:null,
    editind:null,
}

export const listSlice=createSlice({
    name:"list",
    initialState,
    reducers:{
     add_Data:(state,action)=>{
        return {
            ...state,
            menu: action.payload
        }
     },
     increment: (state, action) => {
        const ind = action.payload;
        const incrementedItem = state.menu.find((ele) => ele.id === ind);
        if (incrementedItem) {
          incrementedItem.Quantity = Number(incrementedItem.Quantity) + 1;
        }
     },
     decrement: (state, action) => {
        const ind = action.payload;
        const decrementedItem = state.menu.find((ele) => ele.id === ind);
        if (decrementedItem && Number(decrementedItem.Quantity) > 0) {
          decrementedItem.Quantity = Number(decrementedItem.Quantity) - 1;
        }
     },
        totalValue:(state)=>{
          const makeTotal=state.menu.map((ele)=>{
             const price=parseFloat(ele.Price.replace("$",""))
             const quantity=parseInt(ele.Quantity)
             if(!isNaN(price) && !isNaN(quantity)){
              return price * quantity
             }else{
              return 0
             }
          })
          console.log(makeTotal)
          state.totalPrice=makeTotal.reduce((acc,val)=>acc+val,0)
        },
     editHandler: (state, action) => {
        const editedItem = action.payload;
        const editIndex = state.menu.filter((ele) =>{
          if(ele.id === editedItem){
            return ele
          }
          state.editind=ele.id
     })
     console.log(editIndex)
     state.editItem=editIndex
    },
     msgHandler: (state, action) => {
        const itemId = action.payload;
        state.menu.find((item) => {
          if (item.id === itemId) {
            item.isApproved = !item.isApproved;
          }
        });
      },
      popHandler:(state,action)=>{
        const ind=action.payload
        state.menu.filter((ele)=>{
        if(ele.id==ind){
             state.statusId=ele.id
        }
        console.log(state.statusId)
        })   
      },
      changeStatus: (state) => {
        const selectedItem = state.menu.find((ele) => ele.id === state.statusId);
      
        if (selectedItem) {
          if (selectedItem.isApproved) {
            selectedItem.isApproved = false;
          }
          selectedItem.isMissing = !selectedItem.isMissing;
        }
      },
  },
  })

export const {add_Data,msgHandler,increment,decrement,totalValue,editHandler,popHandler,changeStatus}=listSlice.actions;

export default listSlice.reducer;