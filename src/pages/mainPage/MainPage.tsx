import { useState } from 'react';
import { useGetCharactersQuery } from '../../api/apiSlice';

import CardCharacter from '../../components/cardCharacter/CardCharacter';
import './mainPage.scss';

const MainPage = () => {
    const [isFilter, setIsFilter] = useState<boolean>(false);

    const { data: characters, isLoading } = useGetCharactersQuery();

    const filteredCharacters = isFilter ? characters?.filter((char) => char.favorite) : characters

    if (isLoading) {
        return (<p>LOADING...</p>)
    }


    return (
        <div className="mainPage">
            <button
                className="filterButton"
                onClick={() => setIsFilter(!isFilter)}
                style={{ "backgroundColor": isFilter ? "#2e5a70" : null }}
            ></button>
            <div className="container">
                {filteredCharacters?.map(char => <CardCharacter char={char} key={char.id} />)}
            </div>
        </div>
    )
}

export default MainPage;