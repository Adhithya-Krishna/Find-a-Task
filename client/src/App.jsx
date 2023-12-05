import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "./components/Card"
import Header from "./components/Header"


function App() {
  const [random, setRandom] = useState({})

  useEffect(() => {
    const fetchRandomActivity = async () => {
      const randomActivity = await axios.get("http://localhost:3001/")
      setRandom(randomActivity.data);
    }
    fetchRandomActivity()
  }, [])

  return (
    <div className='main-container'>
      <Header setRandom={setRandom} />
      <Card random={random} />
    </div>
  )
}

export default App
