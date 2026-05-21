import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router';
import RootLayout from './RootLayout';
import Home from './Home';
import CreateEmp from './CreateEmp';
import ListOfEmps from './ListOfEmps';
import Employee from './Employee';
import EditEmployee from './EditEmployee';
function App() {

  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {path: "",element:<Home /> },
        {path:"create-emp",element:<CreateEmp /> },
        {path:"list",element:<ListOfEmps /> },
        {path:"employee",element:<Employee/> },
        {path:"edit-emp",element:<EditEmployee />},

      ],

    },
  ]);
  return (
    <RouterProvider router={routerObj} />
  )
}

export default App