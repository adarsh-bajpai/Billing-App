const intialState = {
    customers : [],
    singleCustomer : {},
    singleProduct:{},
    products:[]
    
}

const billingReducer = (state=intialState,action)=>{
    switch(action.type){

        case 'ADD_CUSTOMER' : {
            return {...state , customers : [...state.customers, action.payload]}
        }
        case 'GET_ONE_CUSTOMER' : {
            return {...state, singleCustomer : {...action.payload}}
        }
        case  'GET_CUSTOMERS' : {
            return {...state, customers: [...action.payload]}
        }
        case 'EDIT_CUSTOMER' :{
            return {
                ...state,
                customers : state.customers.map((ele)=>{
                    if(ele._id===action.payload._id){
                        return { ...ele, ...action.payload }
                    }else{
                        return {...ele}
                    }
                })
            }
        }
        case 'CLEAR_CUST_DATA' : {
            return {...state,singleCustomer : {} } 
        }
        case 'DELETE_CUSTOMER' : {
            const filterCustomers =  state.customers.filter((ele)=>{
                return ele._id !== action.payload._id
            })
            return {...state , customers : filterCustomers}
        }

        // add product
        case 'ADD_PRODUCT' : {
            return {...state, products: [...state.products, action.payload]}
        }
        case 'GET_ALL_PRODUCTS' : {
            return {...state , products: [...action.payload]}
        }
        case 'GET_SINGLE_PRODUCT': {
            return {...state, singleProduct:{...action.payload}}
        }

        case 'DALETE_PRODUCT': {
            const filrterProducts = state.products.filter((ele)=>{
                return ele._id !== action.payload._id
            })
            return {...state, products : filrterProducts}
        }
        case 'CLEAR_PRODUCT_DATA' : {
            return {...state, singleProduct : {} }
        }
        case 'EDIT_PRODUCT' :{
            return{
                ...state,
                products : state.products.map((ele)=>{
                    if(ele._id===action.payload._id){
                    return { ...ele , ...action.payload }
                    }else{
                        return {...ele}
                    }
                })
            }
        }
        
 default : {
            return {...state}
        }
    }
}

export default billingReducer

