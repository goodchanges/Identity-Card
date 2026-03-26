// src/App.js
import React from 'react';
import IdCard from './IdCard';

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
        // ✅ Use process.env.PUBLIC_URL to find images in the public folder
        picture={process.env.PUBLIC_URL + "/boy.jpg"} 
      />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={1.72}
        birth={new Date("1993-05-11")}
        // ✅ Use process.env.PUBLIC_URL here too
        picture={process.env.PUBLIC_URL + "/girl.jpg"}
      />
    </div>
  );
}

export default App;