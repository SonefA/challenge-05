// const redux = require('redux');
// const createStore = redux.createStore;

// const initialState = {
//     value: 0,
//     age: []
// }

// // store
// // wadah besar untuk menyimpan state atau value secara global
// const store = createStore(rootReducer);
// console.log(store.getState());


// //Reducer
// //suatu fungsi  untuk mengupdate state atau value dari reducer
// //function untuk merubah store
// const rootReducer =( state = initialState, Action)=>{
//     // return state;
//     console.log(Action , "action")
// }


// //Subscription
// //Proses penggunaan store yang dimiliki


// //Dispatch / action
// //Proses pemanggilan sebuah fungsi yang disediakan reducer
// store.dispatch({type : 'ADD_VALUE'})



const redux = require('redux');
const createStore = redux.createStore;

let dataInputan = "percobaan"

const initialState = {
    value: 0,
    valueData : "",
    age: 3
}

//Reducer
//suatu fungsi  untuk mengupdate state atau value dari reducer
//function untuk merubah store
const rootReducer =( state = initialState, action)=>{
    // return state;
    // console.log(Action)
    switch (action.type) {
        case "ADD_VALUE":
            return{
                ...state,
                value : state.value +1
            }
            case "ADD_INPUT":
                return{
                    ...state,
                    valueData : action.iniInputan 
                }
            
    
        default:
            return state
    }
}

// store
// wadah besar untuk menyimpan state atau value secara global
const store = createStore(rootReducer)

console.log(store.getState(), "get state");
//Subscription
//Proses penggunaan store yang dimiliki
store.subscribe(()=>{
    console.log(store.getState())
})


//Dispatch / action
//Proses pemanggilan sebuah fungsi yang disediakan reducer
store.dispatch({type : 'ADD_VALUE'})
store.dispatch({type : 'ADD_INPUT' , iniInputan : dataInputan})
console.log(store.getState())
