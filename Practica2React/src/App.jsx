import { Routes, Route } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Products from "./views/Products"
import SignIn from "./views/SignIn"
import SignUp from "./views/SignUp"
import Page404 from "./views/others/Page404"
import Navbar from "./components/Navbar"
import Product from "./views/Product"

function App() {
  return (
    <>
    <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signin" element={<SignIn />} />  
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<Page404 />} />            
        </Routes>
    </>
  )
}

export default App