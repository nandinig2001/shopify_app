import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'
import Item10 from '../../images/item10.jpg'
import Item11 from '../../images/item11.jpg'
import Item12 from '../../images/item12.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Baggit', desc: "This ladies bag comes with two grab handles to ensure your ease of carrying it. ", price:41800,img:Item1},
        {id:2,title:'Caprese', desc: "These handles are robustly built and you can rest easy that they will not tear or get damaged in the course of daily usage.", price:65000,img: Item2},
        {id:3,title:'Louis Vuitton', desc: "The details are what makes a bag beautiful. The studs on this bag are one such decorative and utilitarian feature. ",price:54000,img: Item3},
        {id:4,title:'Dolce Gabbana', desc: "The handles are designed in such a way so as to distribute the weight of the bag evenly thus ensuring optimum level of comfort for you even when you load up the bag to its brim..", price:52600,img:Item4},
        {id:5,title:'Gucci', desc: "The elegantly designed bag goes well with any outfit and can be carried for travel or work. You will be comfortable to carry it whether you are an office going lady or a student.", price:33600,img: Item5},
        {id:6,title:'Gucci', desc: "The stylish handbag by Fristo is made with high quality PU leather and inner material from silk which makes the bag long lasting. It is designed very attractively which never goes out of style.",price:14500,img: Item6},
        {id:7,title:'Spark', desc: "The bag comes with two irremovable and comfortable hand straps, which are sturdy enough to support heavy loads.",price:22500,img: Item7},
        {id:8,title:'Caprese', desc: "This bag is not just stylish, its durable and functional too - allowing you to organize and have easy access to your belongings.",price:63600,img: Item8},
        {id:9,title:'Baggit', desc: " This bag can hold all your essentials and look good doing it! Elegance and functionality comes together in this handbag that gels well at parties as well as offices.",price:52500,img: Item9},
        {id:10,title:'Louis Vuitton', desc: "A form of self-expression and signal of personal style, handbags are also an entrée to luxury and glamour. This handbag is both fashionable and utilitarian - it's design goes beyond just style.",price:89999,img:Item10},
        {id:11,title:'Royals', desc: "Handbags are an essential item in the life of a modern woman. They are used today not just for carrying daily items but are also style statements. .",price:45999,img: Item11},
        {id:12,title:'Spark', desc: " This bag can hold all your essentials and look good doing it! Elegance and functionality comes together in this handbag that gels well at parties as well as offices",price:63000,img: Item12}
      
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer