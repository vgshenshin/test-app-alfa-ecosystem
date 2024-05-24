import { useNavigate } from 'react-router-dom';

import './cardCharacter.scss';

const CardCharacter = ({ char: { id, avatar, name, description } }) => {
    const navigate = useNavigate();

    return (
        <article className="charCard" key={id} onClick={() => navigate(id)}>
            <div className="charWrapper">
                <img className="avatar" src={avatar} />
                <h3 className="name">{name}</h3>
            </div>
            <p className="description">{description}</p>
            <div className="buttonsWrapper">
                <button className="deleteButton"></button>
                <button className="likeButton"></button>
            </div>
        </article>
    )
}

export default CardCharacter;
