import { useState } from 'react'
function App() {
  const [counter, updateCounter] = useState(0)
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          margin: '10px 30px', padding: '10px', width: '100px', cursor: 'pointer',
          border: '1px solid black', backgroundColor: 'skyblue', borderRadius: '6px',
        }}
        onClick={() => updateCounter(counter + 1)}
      >
        Update Count
      </div>

      <div
        style={{ padding: '10px', width: '20px', border: '2px solid orange', backgroundColor: 'skyblue', borderRadius: '6px', color: '#000' }}
      >
        {counter}
      </div>
    </div>
  );
}

export default App;
