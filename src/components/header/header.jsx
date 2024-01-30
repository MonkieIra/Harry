import { useEffect, useState } from 'react';
import './header.scss';
import axios from 'axios';


function Header({schools, setCards , cards,filterCards, setFilterCards }) {
    const [choosedSchool, setChoosedSchool] = useState(0);
    const [name, setName] = useState('');


    const filterByName = () =>{
        let newCards = [];

        filterCards.forEach((card)=>{
         if(card.name.toLowerCase().includes(name.toLowerCase())){
            newCards.push(card);
         }
        })

        setFilterCards(newCards);
    }

    useEffect(()=>{
        if(name.length > 2){
            filterByName();
        } else{
            setFilterCards(cards);
        }
    }, [name])
    const handleChoosedSchool = () =>{
        axios.get('http://localhost:3001/heroesFilterBySchool/' + choosedSchool).then((heroes)=>{
            setFilterCards(heroes.data);
            setCards(heroes.data);
            
          })
    }

    useEffect(()=>{
        if(choosedSchool > 0){
            handleChoosedSchool();
        } else{
            axios.get('http://localhost:3001/heroes').then((heroes)=>{
        setCards(heroes.data)
        setFilterCards(heroes.data);
        })
        }
      },[choosedSchool])




    return <header>
        <div className="container">
        <h1>Harry Potter</h1>
        <h3>View all characters from the Harry Potter universe</h3>

        <div className="inputs">
            <form action="">
                <div className="name">
                    <label htmlFor="name">Имя</label>
                    <input type="text" placeholder='Гермиона' id='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="school">
                    <label htmlFor="">Факультет</label>
                    <select id='school' onChange={(element)=>{setChoosedSchool(element.target.value)}}>
                        <option value="0">Chose one</option>
                        {
                            schools.map((school)=>{
                                return <option value={school.id}>{school.name}</option>
                            })
                        }
                    </select>
                </div>
                
            </form>
        </div>
        </div>
    </header>;
}

export default Header;