import Formation from "../../components/formation/Formation";
import {Skills} from "../../components/skills/Skills";

import "./section2.css"

export default function Section2() {

    return (
        <section className="global-container section2-container" id="section2">
            <Formation />
            <Skills />
        </section>
    )
}