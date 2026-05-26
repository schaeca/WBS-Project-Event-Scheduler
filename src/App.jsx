import { Routes, Route } from "react-router";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import EventDetails from "./pages/EventDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedLayout from "./layouts/ProtectedLayout";


function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/createevent" element={<ProtectedLayout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
