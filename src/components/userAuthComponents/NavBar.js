import React from 'react'
import Register from './Register'
import { Link,Route,withRouter } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from '../BillingComponents/Dashboard'
import CustomerContainer from '../BillingComponents/Customer/CustomerContainer'
import './NavBar.css'
import ProductsContainer from '../BillingComponents/Product/ProductsContainer'
import { Form } from 'formik'
import BillContainer from '../BillingComponents/Billing/BillContainer'
import UserAccount from '../BillingComponents/UserAccount'
console.log('products-----s')
console.log(ProductsContainer)
console.log('form------s')
console.log(Login)


const NavBar = (props)=>{
    const {userAuth,userLoggedIn} = props
   return (
       <div style={{textAlign:"end" ,paddingRight:"50px"}}>
           <Link to ="/" className="Nav" >Home</Link>
           {userLoggedIn ? (
               <React.Fragment > 
                   <Link to="/profile" className="Nav">Profile</Link>
                   <Link to="/dashborad" className="Nav">Dashboard</Link>
                   <Link to="/customers" className="Nav">Customers</Link>
                   <Link to="/products" className="Nav">Products</Link>
                   <Link to="/bills" className="Nav">Billing</Link>
                   <Link onClick ={()=>{
                       const confirm = window.confirm('are you sure?')
                       
                       if(confirm){
                       
                       localStorage.removeItem('token')
                       //alert('user successfully logged out')
                       userAuth()
                       props.history.push("/")
                   }
                   }} className="Nav">Logout </Link>   

               </React.Fragment>
           ):(
           <React.Fragment>
               <Link to="/register" className="Nav">Register</Link>
               <Link to="/login" className="Nav">Login</Link>
               
               
           </React.Fragment>
           )}

           <Route path="/" component={Home} exact={true}/>
           <Route path="/register" component={Register} exact={true}/>
           <Route path="/login" render={(props)=>{
               return <Login
               {...props}
               userAuth={userAuth}/>
           }}/>
           
           <Route path="/customers" component={CustomerContainer} exact={true}/>
           <Route path="/products" component={ProductsContainer} exact={true}/>
           <Route path='/bills' component={BillContainer} exact={true} />
           <Route path='/dashboard' component={Dashboard} exact={true} />
           <Route path="/profile" component={UserAccount} exact={true} />
       </div>
       
   )
}

export default withRouter(NavBar)