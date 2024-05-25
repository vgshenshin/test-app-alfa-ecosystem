import { useNavigate, useParams } from 'react-router-dom';

import { useGetCharByIdQuery } from '../../api/apiSlice';
import './singleCharacterPage.scss';

const SingleCharacterPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: character, isLoading, isError } = useGetCharByIdQuery(id || "");

    if (isLoading) {
        return (<p>LOADING...</p>)
    }

    if (isError) {
        throw new Error("Персонаж не найден")
    }

    return (
        <div className="singleCharacterPage">
            <img className="image" src={character?.avatar} alt={character?.name}/>
            <h1>{character?.name}</h1>
            <p>{character?.description}</p>
            <button className="returnButton" onClick={() => navigate(-1)}>Вернуться</button>
        </div>
    )
}

export default SingleCharacterPage;
