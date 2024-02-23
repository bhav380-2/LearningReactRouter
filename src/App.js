import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";


function App() {


  //____________ 2nd technique_________
  // const routes = createRoutesFromElements(
  //   <>
  //    <Route path="/about" element={<About/>}/>
  //    <Route path= "/items" element={<Items/>}/>
  //   </>
  // );

  // const router = createBrowserRouter(routes);

  // ________1st technique________
  const router = createBrowserRouter([
    {
      path:"/" ,
      element: <Navbar/> ,
      errorElement: <ErrorPage/>,
      children:[
        {index:true, element:<Home/>},
        {path:"about" , element:<About/>},
        {
          path:"items",
          children:[
            {index:true,element:<Items/>},
            {
              path:":id",
              element:<ItemDetails/>
            }
          ]
        },
      
      ]
    },
 ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
