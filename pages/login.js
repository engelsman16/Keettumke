import React from 'react';
import useAuth from '../src/hook/auth';

export default function Login() 
{
   const { user, loginWithGoogle, error } = useAuth();
   return (
       <div>
           {error && <p>{error}</p>}
           <button onClick={loginWithGoogle}>Google</button>
           <h1>{user?.uid}</h1>
       </div>
   );
}

