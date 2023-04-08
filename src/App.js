import Header from "./shared/Header";
import Footer from "./shared/Footer";
import './style/App.css';
import { Outlet } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Create from "./pages/chapters/component/Create";
import Home from './pages/chapters/Home';
import ReaderHome from './pages/reader/ReaderHome';
import AddReader from './pages/reader/components/AddReader';
import UpdateReader from './pages/reader/components/UpdateReader';
import DetailsReader from './pages/reader/components/DetailsReader';
import EditChapter from "./pages/chapters/component/EditChapter";
import Notfound from "./Notfound"
function App() {
  return (

    <>
      <Header />
      <Outlet />


      <Routes>
        <Route path='*' element={<Notfound />}></Route>
        <Route path='/' element={<Home />}></Route>

        <Route path='/Create' element={<Create />}></Route>

        <Route path='/EditChapter/:id' element={<EditChapter />}></Route>



        {/* reader */}
        <Route path='/reader' element={<ReaderHome />}></Route>
        <Route path='/AddReader' element={<AddReader />}></Route>
        <Route path='/UpdateReader/:id' element={<UpdateReader />}></Route>
        <Route path='/DetailsReader/:id' element={<DetailsReader />}></Route>

      </Routes>

      <Footer />

    </>


  );
};

export default App;
