import React, { useState } from "react";


export default function Countertable(){
const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
 
const increment = (index: number) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
}
return (
    <div style={{ fontFamily: 'monospace', backgroundColor: '#1a1d23', color: 'white', padding: '20px' }}>
      <table style={{ borderCollapse: 'collapse', width: '300px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #444' }}>
            <th align="left">Label</th>
            <th align="left">Count</th>
            <th align="left">Button</th>
          </tr>
        </thead>
        <tbody>
          {counts.map((count, index) => (
            <tr key={index}>
              <td style={{ padding: '8px 0' }}>Counter {index + 1}</td>
              <td>{count}</td>
              <td>
                <button 
                  onClick={() => increment(index)}
                  style={{ cursor: 'pointer', padding: '2px 8px' }}
                >
                  [Click]
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
   
  );
  
}
