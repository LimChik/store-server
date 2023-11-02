import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Счетчик:{count}
        <button onClick={()=>setCount(count+1)} style={{backgroundColor:'red',color:'black'}}>Добавить 1</button>
        <button onClick={() => setCount(count - 1)}>Вычесть 1</button>
      </div>
    </>
  )
}

export default App
