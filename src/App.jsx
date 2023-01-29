import Navbar from './Componets/Navbar';
import Homepage from './Componets/Homepage';
import Products from './Componets/Products';
import './App.css';
import Footer from './Componets/Footer';
import Services from './Componets/Services';
import {Routes,Route,Link} from "react-router-dom"


function App() {
  return (
 <>
<Navbar/>
 
 
 
 <Routes>

 <Route  path="/"  element={<Homepage />}>
 </Route>


 <Route path = "Products" element={<Products/>}></Route>
 <Route path ="Services" element={<Services/>}/>

 </Routes>


<Footer/>
 
 </>
  );
}

export default App;
