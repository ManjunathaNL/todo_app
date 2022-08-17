import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Componets/Home';
import TodoContainer from './Componets/TodoContainer';
import Login from './Componets/Login';
import Register from './Componets/Register';
import Account from './Componets/Account';
const App = (props) => {
  
  
  return (
    <div>
      <h1>Hello Home</h1>
      <ul>
      {/* <li> <Link to="/">Home</Link></li> */}
      <li> <Link to="Register"> Register</Link></li>
      <li> <Link to="Login"> Login</Link></li>

       {/* <li> <Link to="Todo">Todo</Link></li> */}
      {/* <li> <Link to="Account">Account</Link></li>  */}
      </ul>
      {/* <Route path='/' component={Home}  /> */}
      
      <Route path="/Login" component={Login}/>
       <Route path="/Register" component={Register}/>
      <Route path="/Todo" component={TodoContainer}/>
      <Route path="/Account" component={Account}/>

      {/* <TodoContainer /> */}
      
      {/* <Login /> */}
    </div>
  );
}
export default App;
