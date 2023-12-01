//importing the react object and the useState function from 'react' module
import React, { useState } from 'react'
//importing the ColorBlock form into app.js folder 
import ColorBlock from './Components/ColorBlock.js';
import ColorForm from './Components/ColorForm.js';


//defining our component App
function App() {
  let [colors, setColors] = useState([  'violet', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red' ]) 

  let colorMap = colors.map((color, i) => {
    return (
    <ColorBlock key={i} color={color} />
    )
  })
  //iterating over each color to create a new array called 'colorMap'
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  //returning ColorBlock for each color in the array  
  return ( 
    <div className='App'>
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>

  );
}

export default App;

//Components 
// ColorForm.js
// 

//Stateful Variables 
// 1. colorsii9