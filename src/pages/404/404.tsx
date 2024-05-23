import { useNavigate } from "react-router-dom"

import "./404.scss";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="pageNotFound">
            <h1>Эта страница не найдена</h1>
            <button className="returnButton" onClick={() => navigate(-1)}>Вернуться назад</button>
        </div>
    )
}

export default PageNotFound;