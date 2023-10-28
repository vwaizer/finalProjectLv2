import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './page/Cart';
import Detail from './page/Detail';
import Home from './page/Home';
import Login from './page/Login';
import Product from './page/Product';
const Context = () => {
    const [dataBase, setDataBase] = useState([]);
    // const [loading,setLoading]=useState(false);
    async function getData() {
      const response = await axios.get('https://mocki.io/v1/e2c19c12-e4be-4064-87cb-4682c1edf43f');
      // setTimeout(()=>{setLoading(true)},2000)
      setDataBase(response.data);
    }
    
    useEffect(() => {
      try {
        getData();
      } catch (err) {
        alert(err.message);
      }
    }, []);
    console.log(dataBase);
    
    return (
      <div style={{ backgroundColor: 'white' }}>
        {/* {!loading ?? <LoadingBlock><DotLoader color="#36d7b7" /></LoadingBlock> } */}
        
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home data={dataBase} />}></Route>
              <Route path="/Product" element={<Product data={dataBase} />}></Route>
              <Route path="/Cart" element={<Cart data={dataBase} />}></Route>
              <Route path="/:productID" element={<Detail data={dataBase} />}></Route>
              {/* <Route path="/Product/:productID" element={<Detail data={dataBase}/>}></Route>  */}
              <Route path="/Login" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
      </div>
    );
}

export default Context