import Resource from "./resource";
interface Liderbord {
  // Identifier of the liderbord (key)
  id: string;
  topic: string;
  description: string;
  tags: string[];
  nbVotes?: number; // number of votes on all resources in the liderbord
  nbResources?: number; // number of resources in the liderbord
  resources: Resource[];
}

export default Liderbord;
