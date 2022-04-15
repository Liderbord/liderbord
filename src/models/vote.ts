import Ressource from "./ressource";

export default interface Vote {
    value: BigInteger;
    date: Date;
    ressource: Ressource;
}