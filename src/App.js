import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
    {/* <CartContextProvider> */}
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="bodys">
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      {/* </CartContextProvider> */}
    </>
  );
}

export default App;
