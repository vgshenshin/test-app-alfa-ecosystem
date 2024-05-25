import { useNavigate } from 'react-router-dom';

import './cardCharacter.scss';
import { useSetFavoriteMutation } from '../../api/apiSlice';

const CardCharacter = ({ char: { id, avatar, name, description, favorite } }) => {
    const navigate = useNavigate();

    const [setFavorite, { isLoading: isFavoriteLoading }] = useSetFavoriteMutation();

    return (
        <article className="charCard" key={id} onClick={() => navigate(id)}>
            <div className="charWrapper">
                <img className="avatar" src={avatar} />
                <h3 className="name">{name}</h3>
            </div>
            <p className="description">{description}</p>
            <div className="buttonsWrapper">
                <button className="deleteButton"></button>
                <button
                    onClick={(e) => {
                        setFavorite({ id, favorite: !favorite });
                        e.stopPropagation();
                    }}
                    className="likeButton"
                    style={{ filter: favorite ? "none" : "opacity(50%)" }}
                >
                    {isFavoriteLoading ? 'load' : ''}
                </button>
            </div>
        </article>
    )
}

export default CardCharacter;
