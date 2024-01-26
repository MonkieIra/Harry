import './card.scss'
import Rectangle from './../../assets/img/Rectangle 37.svg'


function Card({img, name, actor, gender, house, wand, alive}) {
    return <div className="card">
        <div className="image">
            <img src={img} alt='no'/>
        </div>
        <div className="info">
            <p className="name">{name}</p>
            <p className="actor">Actor:{actor}</p>
            <p className="gender">Gender:{gender}</p>
            <p className="house">House: {house}</p>
            <p className="wand">Wand core: {wand}</p>
            <p className="alive">Alive: {alive ? 'yes' : 'no'}</p>
        </div>

    </div>;
}

export default Card;