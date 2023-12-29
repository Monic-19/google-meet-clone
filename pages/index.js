import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { SiGooglemeet } from "react-icons/si";
import { MdKeyboardHide } from "react-icons/md";
import { useState } from "react";

export default function Home() {

  const router = useRouter();

  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if(roomId) router.push(`/${roomId}`)
    else
      alert("Please provide a valid room Id")
  }

  return (
    <div className="hero">
      <h1>Google Meet Clone</h1>

      <div className="room">
        <div className="left">

          <div className="joinRoom">
            <input placeholder="Enter a code" value={roomId} onChange={ (e) => setRoomId(e.target.value)}></input>
             
              <button className="btn btn1" onClick={joinRoom}> <SiGooglemeet></SiGooglemeet>
              Join Room</button>

          </div>

          <h2>---------------------- OR ---------------------</h2>

          <button className="btn btn2" onClick={createAndJoin}>
            <MdKeyboardHide size={17}></MdKeyboardHide>
            Create a new Room
          </button>

        </div>

        <div className="right">
        </div>
      </div>


    </div>
  )
}
