import Estrela from "components/Estrelas";
import './styles.css';


function Score() {

    const score = 3.5;
    const count =12;

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <Estrela />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default Score;