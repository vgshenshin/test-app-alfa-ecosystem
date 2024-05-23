import { useNavigate } from 'react-router-dom';

import hero from './../../img/unknown_hero.webp';
import './cardCharacter.scss';

const CardCharacter = () => {
    const navigate = useNavigate();

    return (
        <article className="charCard" onClick={() => navigate('id')}>
            <div className="charWrapper">
                <img className="avatar" src={hero} />
                <h3 className="name">name</h3>
            </div>
            <p className="description">description</p>
            <div className="buttonsWrapper">
                <button className="deleteButton"></button>
                <button className="likeButton"></button>
            </div>
        </article>
    )
}

export default CardCharacter;
