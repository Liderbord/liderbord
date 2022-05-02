import {Ressource} from "./ressource"

export default interface Vote {
    value: number;
    date: Date;
    ressource: Ressource;
}