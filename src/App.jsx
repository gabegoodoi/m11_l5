import { Routes, Route }  from 'react-router-dom';
import Homepage from './components/Homepage';
import CustomerList from './components/CustomerList';
import CustomerFormWrapper from './components/CustomerFormWrapper';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import './AppStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className='app-container'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/add-customers" element={<CustomerFormWrapper />} />
        <Route path="/edit-customer/:id" element={<CustomerFormWrapper />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/add-products" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<ProductForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;