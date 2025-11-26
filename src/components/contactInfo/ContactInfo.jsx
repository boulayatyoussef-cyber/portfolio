import {contactInfo} from "../../data/contactInfo";

import "./contactInfo.css";

export default function ContactInfo() {

    return (
        <section className="contact-infos">
            <h2>Contactez-moi</h2>
            <p>Vous pouvez me contacter pour toute question ou échange, je répondrai avec plaisir.</p>
            <div>
            {
                contactInfo.map(info => (
                    <div className="contact-info" key={info.key}> {/* Ajout d'une key pour React */}
                        <div className="key">
                            {/* Assurez-vous que info.icon pointe vers un chemin valide ou est un composant */}
                            <img src={info.icon} width={20} height={20} alt={`${info.key} icon`}/>
                            <span>{info.key}</span>
                        </div>
                        <a href={info.link}>{info.value}</a>
                    </div>
                ))

            }
            </div>
        </section>
    )
}