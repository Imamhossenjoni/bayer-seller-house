import { ToastContainer } from 'react-toastify';
import './App.css';
import Register from './Pages/Shared/Register';
import Login from './Pages/Shared/Login';
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import AddProduct from './Pages/Seller/AddProduct'
import AdmissionForm from './Pages/Buyer/AdmissionForm';
import ProductBuyForm from './Pages/Buyer/ProductBuyForm'
import AdmitionForm from './Pages/Seller/AdmitionForm'
import Services from './Pages/Services/Services';
import DashBoard from './Pages/DashBoard.js/DashBoard';
import OrderList from './Pages/DashBoard.js/OrderList'
import MyReview from './Pages/DashBoard.js/MyReview';
import YourProfile from './Pages/DashBoard.js/YourProfile';
import Payment from './Pages/DashBoard.js/Payment';
import BuyerProfile from './Pages/DashBoard.js/BuyerProfile';
import ManageProducts from './Pages/DashBoard.js/ManageProducts';
import Footer from './Pages/Shared/Footer';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:id' element={<RequireAuth><ProductBuyForm></ProductBuyForm></RequireAuth>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/buyer' element={<AdmissionForm></AdmissionForm>}></Route>
        <Route path='/seller' element={<AdmitionForm></AdmitionForm>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}>
          <Route index element={<MyReview></MyReview>}></Route>
          <Route path='order' element={<OrderList></OrderList>}></Route>
          <Route path='profile' element={<YourProfile></YourProfile>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='buyerProfile' element={<BuyerProfile></BuyerProfile>}></Route>
          <Route path='manage' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
