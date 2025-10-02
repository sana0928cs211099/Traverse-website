// App.jsx
import React from 'react';
import {createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navbar from './Components/navbar/Navbar';
import Offer from './Components/offer/offer';
import Footer from './Components/footer/Footer';
import Flight from './Pages/Flight/Flight';
import Stay from './Pages/Stays/Stay';
import Train from './Pages/Trains/Train';
import Cabs from './Pages/Cabs/Cabs';
import Buses from './Pages/Buses/Buses';
import Holiday from './Pages/Holiday/Holiday';
import Attraction from './Pages/Attraction/Attraction';
import HotelOffer from './Components/StayOffer/HotelOffer';
import HotelDetail from './Components/StayOffer/HotelDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/Offer',
      element: <><Offer/></>
    },
    {
      path: '/flight',
      element: <><Navbar/><Flight/></>
    },
    {
      path: '/stay',
      element: <><Navbar/><Stay/></>
    },
    {
      path: '/train',
      element: <><Navbar/><Train/></>
    },
    {
      path: '/cabs',
      element: <><Navbar/><Cabs/></>
    },
    {
      path: '/bus',
      element: <><Navbar/><Buses/></>
    },
    {
      path: '/holiday',
      element: <><Navbar/><Holiday/></>
    },
    {
      path: '/attraction',
      element: <><Navbar/><Attraction/></>
    },
    {
      path: '/hoteloffer',
      element: <><Navbar/><HotelOffer/></>
    },
    {
      path:'/hotel/:id',
      element : <HotelDetail />
    }
    // Add more routes as needed
  ])
  return(

    <>
      <RouterProvider router={router}/>
      <Footer/>
      <Outlet/>
    </>
  ) 
};

// Connect the component to the store
export default App;