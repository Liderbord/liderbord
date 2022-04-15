import Liderbord from "./liderbord";

export default interface Ressource {
    title: string;
    link: string;
    score: number;
    type: string;
    hash?: string;
    upvote: number;
    downvote: number;
    liderbord: Liderbord;
}