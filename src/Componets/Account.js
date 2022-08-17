import React,{useState,useEffect} from 'react'
import Login from './Login'


const Account = (props) => {
    const[user, setUser] = useState({})
    // const {email} =props

    useEffect(()=>{
      const result = JSON.parse(localStorage.getItem("name" || ''))
        setUser(result)
  }, [])

  useEffect(() =>
  {
      const result = JSON.parse(localStorage.getItem("email" || ''))
      setUser(result)
  },[])


    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem((email));
    //     if (loggedInUser) {
    //       const foundUser = JSON.parse(loggedInUser);
    //       setUser(foundUser);
    //     }
    //   }, [user]);

    return(
        <div>
            <h2>User Account</h2>
            <p> Email - {user.email }</p>
            <p>Username - {user.name }</p>
        </div>
    )
}

export default Account