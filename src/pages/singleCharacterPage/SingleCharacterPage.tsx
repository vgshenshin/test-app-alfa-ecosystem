import { useNavigate } from 'react-router-dom';

import './singleCharacterPage.scss';

const SingleCharacterPage = () => {
    const navigate = useNavigate();


    return (
        <div className="singleCharacterPage">
            <button className="returnButton" onClick={() => navigate(-1)}>Вернуться</button>
            <h1>name</h1>
            <p>description</p>
            <img className="image" />
        </div>
    )
}

export default SingleCharacterPage;
