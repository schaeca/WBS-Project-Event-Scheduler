import { useContext, useState } from "react";
import { NavigationContext } from "../Context/NavigationContext";

export default function SignIn() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {navigate} = useContext(NavigationContext) 

  async function login(user){
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      if (!res.ok) {
        if (res.status== 400){
          setError("ValidationError: password length must be at least 8 characters long")
          throw new Error("ValidationError: password length must be at least 8 characters long")
        } else if(res.status==403){
          setError("Invalid email or password.")
          throw new Error("Invalid email or password.")
        }else{
          setError("Failed to login.")
          throw new Error("Something went wrong")
        }
      } 
      const data = await res.json();
      console.log(data);
      //store token 
      localStorage.setItem("eventLoginToken", data.token)    
      navigate("/")
    } catch (e) {
      setError(`Failed to register. ${e.message}`);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function submitAction(formData) {
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    login(user)
  }

  return (
    <div className="p-2 bg-yellow-100">
      <form action={submitAction} className="">
        <fieldset>
          <legend className="pt-2 text-2xl font-bold text-center text-gray-800">
            Login
          </legend>
          <label className="p-2" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            required
            className="mt-1 border rounded px-3 py-2"
          ></input>
          <br />
          <label className="p-2" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            required
            className="mt-1 border rounded px-3 py-2"
          ></input>
          <br />
          <button className="m-2 p-2 rounded bg-yellow-300" type="submit">
            Login
          </button>
        </fieldset>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}..</p>}
    </div>
  );
}
