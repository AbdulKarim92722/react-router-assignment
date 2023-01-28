import Navbar from './Componets/Navbar';
import Homepage from './Componets/Home';
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
<Route path ="/"  element={ <Footer/>}/>
 </Route>
 <Route path = "Products" element={<Products/>}/>
 <Route path ="Services" element={<Services/>}/>

 </Routes>



 
 </>
  );
}

export default App;
