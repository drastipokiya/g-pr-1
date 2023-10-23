import React from 'react';
import Child from './Child';

function Parent() {
  const message = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={message} />
    </div>
  );
}

export default Parent;
