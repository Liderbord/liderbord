import Liderbord from "./liderbord";

export default interface Ressource {
    title: string;
    link: string;
    score: BigInteger;
    type: string;
    hash?: string;
    liderbord: Liderbord;
}