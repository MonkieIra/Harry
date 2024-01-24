import './card.scss'
import Rectangle from './../../assets/img/Rectangle 37.svg'

function Card() {
    return <div className="card">
        <div className="image">
            <img src={Rectangle} alt='no'/>
        </div>
        <div className="info">
            <p className="name">Hermione Granger</p>
            <p className="actor">Actor: Emma Watson</p>
            <p className="gender">Gender: female</p>
            <p className="house">House: Gryffindo</p>
            <p className="wand">Wand core: dragon heartstring</p>
            <p className="alive">Alive: yes</p>
        </div>

    </div>;
}

export default Card;