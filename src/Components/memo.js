import React, { useState, useMemo } from 'react';

function Memo() {
  const [count, setCount] = useState(0);
  
  const memo = useMemo(() => {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  });

  return (
    <div style={{textAlign:"center"}}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>MemoResult: {memo}</p>
    </div>
  );
}

export default Memo;
