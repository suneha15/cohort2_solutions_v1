import { useState } from 'react'
import './App.css'

function App() {
    return(
      <div>
        <CardWrapper>Hi there 1</CardWrapper><br />
        <CardWrapper>Hi there 2</CardWrapper><br />
        <CardWrapper>
            <TextComponent/>
        </CardWrapper><br />
        <CardWrapper>
            <CardWrapper>
            hi there <span></span>
            <input type="text" placeholder='type your name here' />
            </CardWrapper>
            <ButtonComponent/>
        </CardWrapper>
      </div>
    )
}

function TextComponent(){
  return <div>
    hi there from text component
  </div>
}

function ButtonComponent(){
  return <div>
    <button style={styles.button}>
      Click me
  </button>
  </div>
}

// it needs to accept some REACT-COMPONENT as an input and then render that react component here, inside some extra styles

function CardWrapper({children}){
  //create a div which has a border
  //and inside the div renders the prop
  return(
    <div style={{
        border: "2px solid black",
        padding : "10px",
        margin : 10
    }}>
      {children}
    </div>
  )
}

const styles = {
  cardBorder : {
    border: '2px solid #ddd',
    borderRadius: '8px',
  },
  cardHeading : {
    color : "blue",
    fontSize : "30px"
  },
  button : {
    textDecoration: 'none',
    color: '#fff', // Text color
    padding: '10px 15px', // Padding for the button
    borderRadius: '5px', // Border radius for rounded corners
    backgroundColor: '#007BFF', // Background color for the button
    display: 'inline-block', // Display as inline-block to be side by side
    margin: '10px', // Margin between buttons
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  },
}

export default App
