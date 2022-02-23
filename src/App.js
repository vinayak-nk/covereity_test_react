import { useState } from 'react'
function App() {
  const [counter, updateCounter] = useState(0)
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          margin: '10px 30px', padding: '10px', width: '50px', cursor: 'pointer',
          border: '1px solid blue', backgroundColor: 'skyblue', borderRadius: '10%',
        }}
        onClick={() => updateCounter(counter + 1)}
      >
        Update
      </div>

      <div style={{ padding: '10px', width: '20px', backgroundColor: 'skyblue', color: '#000' }} >
        {counter}
      </div>
    </div>
  );
}

export default App;
