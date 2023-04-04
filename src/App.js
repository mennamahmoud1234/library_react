import Header from "./shared/Header";
import Footer from "./shared/Footer";
import './style/App.css';
import { Outlet } from "react-router-dom";
import { Routes,Route } from 'react-router-dom';
import Create   from "./pages/chapters/component/Create";
import Home from './pages/chapters/Home';
import EditChapter from "./pages/chapters/component/EditChapter";
function App() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>

   <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/Create' element={<Create/>}></Route>
      
      <Route path='/EditChapter/:id' element={<EditChapter/>}></Route>
      
    </Routes>
   
   
   
   </>
  );
};

export default App;
