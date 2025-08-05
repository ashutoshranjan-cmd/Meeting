import React,{useState} from 'react'
import { useNavigate } from 'react-router';

const JoinRoom = () => {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        if(roomId.trim())
        {
            navigate(`/room/${roomId}`)
        }
    }
  return (
    <div className='join-container'>
        <h1>Welcome to the Conferrencing App</h1>
        <input type="text"
        placeholder='Enter room id' 
        value={roomId}
        onChange={(e)=>setRoomId(e.target.value)}/>
        <button onClick={handleSubmit}>JOIN NOW</button>
    </div>
  )
}
export default JoinRoom;