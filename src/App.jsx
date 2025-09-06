import { useState } from 'react'
import LandingPage from './components/LandingPage'
import SideBar from './components/SideBar'
import ChatBot from './pages/ChatBot'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import CodeReviewer from './pages/CodeReviewer'
import CodeEditor from "./components/CodeEditor";
import QuizApp from './pages/Quiz'
import VideoConference from './pages/Virtual_classroom'
import useCanvasCursor from './pages/Effect';
import ComputerScienceCourses from './pages/Course'



function App() {
  useCanvasCursor(); 
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><SideBar /><LandingPage /></>
    },
    {
      path:"/chatbot",
      element:<><SideBar /><ChatBot /></>
    },
    {
      path:"/virtual_classroom",
      element:<><SideBar /><VideoConference /></>
    },
    {
      path:"/codereviewer",
      element:<><SideBar /><CodeReviewer /></>
    },
    {
      path:"/ai_quiz",
      element:<><SideBar /><QuizApp /></>
    },
    {
      path:"/code_editor",
      element:<><SideBar /><CodeEditor /></>
    },
     {
      path:"/course",
      element:<><SideBar /><ComputerScienceCourses /></>
    }
  ])
  

  return (
    <>
    <canvas
        id="canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
        }} />
       <RouterProvider router={router} />
       {/* <ComputerScienceCourses /> */}
    </>
  )
}


export default App;
