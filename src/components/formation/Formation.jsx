import {formations} from "../../data/formations";

import './formation.css';

export default function Formation() {

    return (
        <div className="formation-main-block">
            
            <h3 className="about-title">Formation</h3> 
            
            <div className="timeline-compact">
                {formations.map((item, index) => (
                    <div className="timeline-item-compact" key={index}>
                        
                        {/* NOUVEAU: Conteneur du marqueur pour le centrage de la boule */}
                        <div className="timeline-marker"></div>
                        
                        <div className="timeline-content-compact">
                            
                            <h4 className="timeline-title-compact">{item.titre}</h4>
                            
                            <p className="timeline-year-compact">{item.annee}</p>
                            
                            <p className="timeline-ecole-compact">{item.ecole}</p>
                            
                            <ul className="timeline-details-list-compact">
                                {item.details && item.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                ))}
                            </ul>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}