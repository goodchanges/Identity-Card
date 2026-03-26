// src/App.js
import React from 'react';
import IdCard from './IdCard'; // Make sure you choose class or functional based on your VIT register number!

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Task 2: Identity Components</h2>
      
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={1.78}
        birth={new Date("1992-07-14")}
        // Just use the file name with a slash!
        picture="/boy.jpg" 
      />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={1.72}
        birth={new Date("1993-05-11")}
        // Just use the file name with a slash!
        picture="/girl.jpg"
      />
    </div>
  );
}

export default App;