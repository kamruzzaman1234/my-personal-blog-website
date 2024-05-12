import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Register from './components/Pages/Register.jsx';
import FontPage from './components/Pages/FontPage.jsx';
import Login from './components/Pages/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivetRouter from './PrivetRoute/PrivetRouter.jsx';
import MainHome from './components/Pages/PrivetPage/MainHome.jsx';
import Homes from './components/Pages/PrivetPage/Homes.jsx';
import About from './components/Pages/PrivetPage/About.jsx';
import Portfolio from './components/Pages/PrivetPage/Portfolio.jsx';
import Blog from './components/Pages/PrivetPage/Blog.jsx';
import Contact from './components/Pages/PrivetPage/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <FontPage></FontPage>
      },
      {
        path: '/register',
        element: <Register></Register>

      },

      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/mainHome',
    element: <PrivetRouter className="bg-black"><MainHome></MainHome></PrivetRouter>,
    children:[
     {
      path: '/mainHome',
      element: <Homes></Homes>,
     },
     
   
    ]
  },
  {
    path:'/about',
    element: <About></About>
  },
  {
    path: '/portfolio',
    element: <Portfolio></Portfolio>
  },
  {
    path:'/blog',
    element: <Blog></Blog>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
