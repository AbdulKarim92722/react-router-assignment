import Navbar from './Componets/Navbar';
import Homepage from './Componets/Home';
import Cards from './Cards';
import Products from './Componets/Products';
import './App.css';
import Footer from './Componets/Footer';
import Services from './Componets/Services';
import {Routes,Route,} from "react-router-dom"

function App() {
  return (
 <>
<Navbar/>
 
 
 
 <Routes>

 <Route  path="/"  element={<Homepage />}>

  <Route path="Cards" element={<Cards/>}/>
 </Route>
 <Route path = "Products" element={<Products/>}/>
 <Route path ="Services" element={<Services/>}>


 </Route>

 </Routes>
 <Footer/>


 
 </>
  );
}

export default App;
