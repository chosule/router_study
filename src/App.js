import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Video from './pages/Video';
import VideoDetail from './pages/VideoDetail';
import NotFound from './pages/NotFound'

import Root from './pages/Root'
function App() {
  const router = createBrowserRouter([
    //각각 라우터에서 사용할수 있는 배열을 전달 
    {
      path:'/',
      element : <Root/>,
      errorElement:<NotFound />,
      children:[
        {index:true, element:<Home />},
        {path:'/video',element:<Video />},
        {path:'/video/:videoId',element:<VideoDetail />}
      ]
    }
  ])
  
  return (

      <RouterProvider router={router} >
      </RouterProvider>
    
  );
}

export default App;
