import { useNavigate } from 'react-router-dom';

import { useDeleteCharMutation, useSetFavoriteMutation } from '../../api/apiSlice';
import './cardCharacter.scss';

const CardCharacter = ({ char: { id, avatar, name, description, favorite } }) => {
    const navigate = useNavigate();

    const [setFavorite, { isLoading: isFavoriteLoading }] = useSetFavoriteMutation();
    const [deleteChar, { isLoading: isDeleteLoading }] = useDeleteCharMutation();

    return (
        <article className="charCard" key={id} onClick={() => navigate(id)}>
            <div className="charWrapper">
                <img className="avatar" src={avatar} />
                <h3 className="name">{name}</h3>
            </div>
            <p className="description">
                {
                    description.length > 155 ? description.substring(0, 155) + "..." : description
                }
            </p>
            <div className="buttonsWrapper">
                <button
                    onClick={(e) => {
                        deleteChar(id);
                        e.stopPropagation();
                    }}
                    className="deleteButton"
                    style={{ filter: isDeleteLoading ? "none" : "opacity(50%)" }}
                ></button>
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
