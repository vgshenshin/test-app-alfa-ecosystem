
import hero from './../../img/unknown_hero.webp';
import './cardCharacter.scss';

const CardCharacter = () => {

    return (
        <article className="charCard">
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
