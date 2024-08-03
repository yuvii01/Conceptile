import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./Profile.jsx";
// import ProfileEdit from "./ProfileEdit.jsx";

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Profile/>,
    },
    // {
    //   path: "/edit",
    //   element: <ProfileEdit/>,
    // }  
  ]);  
  return (
    <div className="flex justify-center">
      <RouterProvider router={routes} />
    </div>
  );
}
export default App; 
