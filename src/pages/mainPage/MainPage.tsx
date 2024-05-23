import CardCharacter from '../../components/cardCharacter/CardCharacter';
import './mainPage.scss';

const MainPage = () => {


    return (
        <div className="mainPage">
            <button className="filterButton"></button>
            <div className="container">
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
            </div>
        </div>
    )
}

export default MainPage;