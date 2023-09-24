import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from '../src/Components/Header'
import Body from '../src/Components/Body'
import Footer from '../src/Components/Footer' 
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';
import Offer from './Components/Offer';
import Cart from './Components/Cart';
import Error from './Components/Error';
import { Provider } from 'react-redux';
import store from './Utiles/store';




function App() {
  return (
    <Provider store={store}>
   <Header/>
    <Outlet/>
    <Footer/>
    </Provider>
   
  )
}

 
const Router=createBrowserRouter([{
  path:"/",
  
  element:<App/>,
 
  errorElement:<Error/>,
  
  children:[
    {
      path:"/",
      element:<Body/>

    },
    {
      path:"/home",
      element:<Body/>
    },
    
    {
      path:"/offer",
      element:<Offer/>

    },
    {
      path:"/about",
      element:<About/>
    },
    
    {
      path:"/cart",
      element:<Cart/>

    },
  ]
}])
  

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    </React.StrictMode>
);


reportWebVitals();
