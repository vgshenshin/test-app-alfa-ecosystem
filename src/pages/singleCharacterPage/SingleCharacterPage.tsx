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

    const { avatar, name, description } = character;

    return (
        <div className="singleCharacterPage">
            <img className="image" src={avatar} />
            <h1>{name}</h1>
            <p>{description}</p>
            <button className="returnButton" onClick={() => navigate(-1)}>Вернуться</button>
        </div>
    )
}

export default SingleCharacterPage;
