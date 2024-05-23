import React, { useState } from "react";
import '../App.css';


export default function withAuthentication(Component)
    {
        return function AuthenticatedComponent(){
            const [isAuthenticated , setisAuthenticate] = useState(false);
            const authenticate = ()=> {
                setisAuthenticate(true);
            };
            
            if (!isAuthenticated) {
              return <>
              <div className="auth" >
              <h2>User is not Authenticated</h2>
              <button className="auth"  onClick={authenticate}>Authenticate</button>
              </div>
              
              </> 
            }
            return <Component />;
        }
       
    }
