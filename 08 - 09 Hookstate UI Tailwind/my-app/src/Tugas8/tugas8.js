import '../App.css';
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1); 
  const [limit, setLimit] = useState(""); 

  const handleCount = () => {
        setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 10){
      setLimit("State count sudah lebih dari 10!!");
     }else{
      setLimit("");
     }
  }, [count]);      
    
  return (
    <div className="App">
      <p class="ridge3">
        <p> Total : {count}</p>
      
      <button class="button" onClick={handleCount}>Tambah</button>
      <br></br>
      {count >= 10? <p>{limit}</p> : <p></p>}
        </p>
    </div>
  
  );
}

export default App;