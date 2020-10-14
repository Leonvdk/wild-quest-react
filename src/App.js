import React from 'react';
import './reset.css';
import Navbar from './components/Navbar/Navbar'
import QuoteCard from './components/QuoteCard/QuoteCard'

const simpsons = [
{image:"https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg",
quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
firstName: "Nelson",
lastName: "Muntz"},
           
{image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
quote: "Me fail English? That's unpossible",
firstName: "Ralph",
lastName: "Wiggum"},

{image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
quote: "Children are the future, unless we stop them now!",
firstName: "Homer",
lastName: "Simpson"}
]



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {simpsons.map ((simpson, index) => (
        <QuoteCard 
          key = {index}            
          image = {simpson.image}
          quote = {simpson.quote}
          firstName =  {simpson.firstName}
          lastName = {simpson.lastName}
        />))}
  
    </div>
  );
}

export default App;
