import Resource from "./resource";
interface Liderbord {
  // Identifier of the liderbord (key)
  id: string;
  title: string;
  tags: string[];
  resources: Resource[];
}

export default Liderbord;
