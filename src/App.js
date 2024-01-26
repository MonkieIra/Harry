import { useState } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import Header from './components/header/header';


import Rectangle from './assets/img/Rectangle 37.svg';
import mal from './assets/img/mal.svg';
import har from './assets/img/har.jpeg';

function App() {

  const [schools , setSchool] = useState([
    {name: 'Гриффиндор'},
    {name: 'Слизерин'},
    {name: 'Пуффендуй'},
    {name: 'Когтевран'},
  ])
  const [cards , setCards] = useState([
    {
      img:Rectangle,
      name: "Hermione Granger", 
      actor: "Emma Watson",
      gender: "female",
      house:"Gryffindor",
      wand:"dragon heartstring",
      alive: true
    },
    {
      img:mal,
      name: "Draco Malfoy", 
      actor: "Tom Felton",
      gender: "male",
      house:"Slytherin ",
      wand:"unicorn tail-hair",
      alive: true
    },
    {
      img:har,
      name: "Harry Potter", 
      actor: "Daniel Radcliffe",
      gender: "male",
      house:"Gryffindor ",
      wand:"dragon heartstring",
      alive: true
    }
  ]);






  return (
    <div className="App">
      <Header schools={schools}/>
      <hr/>
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
