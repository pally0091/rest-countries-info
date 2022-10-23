
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './componens/Main'
import Home from './componens/Home'
import Countries from './componens/Countries'
import About from './componens/About'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/countries',
          element: <Countries></Countries>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
