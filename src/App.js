import { useState } from 'react'

const test_switch_break = (counter) => {
  console.log(counter)
  let text = '--'
  const a = 10
  switch (counter) {
    default: text = '======'
    case counter < 10: text = 'less than 10'
    case counter == 10: text = 'equal to 10'
    case counter > 10: {
      text = 'greater than 10'
      a = 20
    }
  }

  return text
}


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
      <span style={{ marginLeft: '20px', color: 'red' }}>
        {test_switch_break(counter)}
      </span>
    </div>
  );
}

export default App;
