import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import Header from './components/header/header';
import axios from 'axios';


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

  useEffect(()=>{
    axios.get('http://localhost:3001/schools').then((schools)=>{
      setSchool(schools.data);
    })

    axios.get('http://localhost:3001/heroes').then((heroes)=>{
      setCards(heroes.data);
    })

  }, [])

  const [cards , setCards] = useState([
   
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
