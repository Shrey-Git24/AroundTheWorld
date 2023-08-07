import { useContext, useState } from "react";
import {Navigate} from "react-router-dom";
import { UserContext } from "../UserContext";
export default function SignInPage() {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect,setRedirect] = useState("");
    const {setUserInfo} = useContext(UserContext);
    async function signin(ev){
        ev.preventDefault();
        const response = await fetch("http://localhost:4000/signin",{
            method:"POST",
            body:JSON.stringify({userName,password}),
            headers:{"Content-Type":"application/json"},
            credentials:"include",
        });
        if(response.ok){
            response.json().then(userInfo=>{
                setUserInfo(userInfo);
                setRedirect(true);
            });
            
        }
        else{
            alert("Wrong Credentials !");
        }
    }
    if(redirect){
        return <Navigate to={"/"} />
    }
    return (

        <div className="login">

            <form className="signin" onSubmit={signin}>
                <h1>Sign In</h1>
                <input type="text" placeholder="Username..." value={userName} onChange={ev => setuserName(ev.target.value)} />
                <input type="password" placeholder="Password..." value={password} onChange={ev => setPassword(ev.target.value)} />
                <button>Sign In</button>
            </form>
        </div>
    )
};