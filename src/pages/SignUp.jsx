import { useContext, useState } from "react";
import { NavigationContext } from "../Context/NavigationContext";

export default function SignUp() {
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {navigate} = useContext(NavigationContext) 

  async function registerUser(user) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:3001/api/users", {
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
        } else if(res.status==409){
          setError("User Already Exist")
          throw new Error("User Already Exist")
        }else{
          setError("Failed to register.")
          throw new Error("Something went wrong")
        }
      } 
      const data = await res.json();
      console.log(data);
      alert(`${user.email} has been registered.`)      
      navigate("/signin")
    } catch (e) {
      setError(`Failed to register. ${e.message}`);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  const submitAction = async (formData) => {
    const newUser = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    registerUser(newUser);
  }

  return (
    <div className="p-2 bg-slate-300">
      <form action={submitAction} className="">
        <fieldset>
          <legend className="pt-2 text-2xl font-bold text-center text-gray-800">
            Registration Form
          </legend>
          <label className="p-2" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Put in your email address"
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
            placeholder="Type in a secure password"
            required
            className="mt-1 border rounded px-3 py-2"
          ></input>
          <br />
          <button
            className="m-2 p-2 rounded bg-slate-500 text-white"
            type="submit"
          >
            Register
          </button>
        </fieldset>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}..</p>}
      
    </div>
  );
}
