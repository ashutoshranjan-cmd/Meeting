import { Route,Routes } from "react-router"
import './App.css'
import JoinRoom from "./JoinRoom"
import { Room } from "./Room"
const App = ()=>{
  return(
    <Routes>
      <Route path="/" element={<JoinRoom/>}/>
      <Route path="/room/:id" element={<Room/>}/>
    </Routes>
  )
}
export default App;