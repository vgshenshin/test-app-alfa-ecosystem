import { useGetCharactersQuery } from '../../api/apiSlice';

import CardCharacter from '../../components/cardCharacter/CardCharacter';
import './mainPage.scss';

const MainPage = () => {

    const {
        data: characters,
        isLoading
    } = useGetCharactersQuery();

    if (isLoading) {
        return (<p>LOADING...</p>)
    }


    return (
        <div className="mainPage">
            <button className="filterButton"></button>
            <div className="container">
                {characters?.map(char => <CardCharacter char={char} key={char.id} />)}
            </div>
        </div>
    )
}

export default MainPage;