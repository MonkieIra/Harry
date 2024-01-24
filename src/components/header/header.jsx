import './header.scss'


function Header() {
    return <header>
        <div className="container">
        <h1>Harry Potter</h1>
        <h3>View all characters from the Harry Potter universe</h3>

        <div className="inputs">
            <form action="">
                <div className="name">
                    <label htmlFor="name">Имя</label>
                    <input type="text" placeholder='Гермиона' id='name'/>
                </div>
                <div className="school">
                    <label htmlFor="">Школа</label>
                    <select>
                        <option value="0">Chose one</option>
                        <option value="1">Гриффиндор</option>
                        <option value="2">Слизерин</option>
                        <option value="3">Пуффендуй</option>
                        <option value="4">Когтевран</option>
                    </select>
                </div>
                
            </form>
        </div>
        </div>
    </header>;
}

export default Header;