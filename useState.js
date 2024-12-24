import React, { useState } from 'react';

function MyFirstComponent() {
  const [count, setCount] = useState(0); 

  /*useState(0) → Creates a box that starts with 0 inside.
count → This is the value in the box (e.g., how many times you clicked).
setCount → This is the key to change the value in the box.
When you click the button, setCount(count + 1) puts a new value (count + 1) into the box.*/

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}

export default MyFirstComponent;
m
