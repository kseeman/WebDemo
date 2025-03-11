import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const messages: string[] = [
  "I have been clicked",
  "Cool, you clicked me.",
  "Wow, you know how a button works.",
  "Okay, fine, you clicked me again.",
  "Are you really still clicking me?",
  "Seriously? Again?",
  "This is getting old now.",
  "Why do you keep doing this?",
  "STOP clicking me, seriously!",
  "I warned you. Enough!",
  "Thats it, I'm leaving.",
  "Goodbye..."

];
function App() {

  const [isClicked, setIsClicked]= useState(false)
  const [message, setMessage]= useState<String>()
  const [messageIndex, setMessageIndex]= useState<Number>(0)
  const onButtonClick =()=> {
    console.log("I have been clicked")

  setIsClicked(!isClicked)
  setMessage(messages[messageIndex])
  
  }
  return (
    <>
      <h1 style={{color:"#a31aed"}}>Hello World
      </h1>
      <button onClick={onButtonClick}>CLICK ME</button>
      {isClicked && (
        <p>{message}</p>

      )}
    </>
  )
}

export default App
