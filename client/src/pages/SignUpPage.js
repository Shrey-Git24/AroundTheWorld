import { useState } from "react";
export default function SignUpPage() {
    const [firstName, setfirstName] = useState();
    const [lastName, setlastName] = useState();
    const [email, setemail] = useState();
    const [userName, setuserName] = useState();
    const [password, setPassword] = useState();
    async function signup(ev){
        ev.preventDefault();
        const response = await fetch("http://localhost:4000/signup",{
            method:"POST",
            body:JSON.stringify({firstName,lastName,email,userName,password}),
            headers:{"Content-Type":"application/json"}
        });
        if(response.status === 200){
            alert("Registration Successful !");
        }
        else{
            alert("Registration Failed !");
        }
    }
    return (
        <div className="register">

            <form className="signup" onSubmit={signup}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="First Name..." value={firstName} onChange={ev => setfirstName(ev.target.value)} />
                <input type="text" placeholder="Last Name..." value={lastName} onChange={ev => setlastName(ev.target.value)} />
                <input type="email" placeholder="E-Mail..." value={email} onChange={ev => setemail(ev.target.value)} />
                <input type="text" placeholder="Username..." value={userName} onChange={ev => setuserName(ev.target.value)} />
                <input type="password" placeholder="Password..." value={password} onChange={ev => setPassword(ev.target.value)} />
                <button>Sign Up</button>
            </form>
        </div>
    )
};