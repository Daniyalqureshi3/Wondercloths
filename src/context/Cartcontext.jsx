import { createContext, useContext, useEffect, useReducer,  } from "react"; 


const Cartcontext = createContext();

const initailstate ={
    cart: JSON.parse(localStorage.getItem ("cart")) || [],
    favorite: JSON.parse(localStorage.getItem ("favorite")) || []
}

const reducer =(state, action) =>{
 switch(action.type){
    case"ADD_CART":
    return{
        ...state,
        cart:[
            ...state.cart,
            {
                id: Date.now(),
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
                name: action.payload.name,
                color:action.payload.color,
                size:action.payload.size,
                quantity: action.payload.quantity,
            },
        ],
    };
    case"remove_cart":
    return{
        ...state,
        cart: state.cart.filter((t)=> t.id !== action.payload)
    };
    case "ADD_FAVORITE":
        return{
            ...state,
           favorite:[
            ...state.favorite,
            {
            
                id: Date.now(),
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
                name: action.payload.name,
            
            },
           ] 
        };
        case "REMOVE_FAVORITE":
        return {
            ...state,
            favorite: state.favorite.filter((t) => t.id !== action.payload)
        };
        default:
        return state
 };
}

export const CartProvider =({children})=>{
const [state, dispatch] = useReducer(reducer, initailstate)
useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(state.cart))
}, [state.cart])

useEffect(()=>{
    localStorage.setItem("favorite", JSON.stringify(state.favorite))
}, [state.favorite])
return(

    <Cartcontext.Provider value={{state, dispatch}}>
        {children}
    </Cartcontext.Provider>
)
}
export const cartuse =()=> useContext (Cartcontext)