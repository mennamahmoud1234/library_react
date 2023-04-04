import Header from "./shared/Header";
import Footer from "./shared/Footer";
import './style/App.css';
import { Outlet } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Create from "./pages/chapters/component/Create";
import Home from './pages/chapters/Home';
import ReaderHome from './pages/reader/ReaderHome';
import AddReader from './pages/reader/components/AddReader';
import DeleteReader from './pages/reader/components/DeleteReader';
import UpdateReader from './pages/reader/components/UpdateReader';
import DetailsReader from './pages/reader/components/DetailsReader';
function App() {
  return (
    <>
      <Header />
      <Outlet />


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>



        {/* reader */}
        <Route path='/reader' element={<ReaderHome />}></Route>
        <Route path='/AddReader' element={<AddReader />}></Route>
        <Route path='/DeleteReader' element={<DeleteReader />}></Route>
        <Route path='/UpdateReader' element={<UpdateReader />}></Route>
        <Route path='/DetailsReader' element={<DetailsReader />}></Route>

      </Routes>

      <Footer />

    </>
  );
};

export default App;
