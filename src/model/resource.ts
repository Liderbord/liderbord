import ResourceType from "./resourceType";
import UserVote from "./userVote";

interface Resource {
  // Identifier of the resource (key)
  id: string;
  // The name of the resource
  title: string;
  // The link to the resource
  link: string;
  // The score of the resource
  score: number;
  // The type of the resource
  type?: ResourceType;
  // The hash of the resource, to be compared with the blockchain
  hash: string;
  // nb of upvotes the resource has
  upVotes: number;
  // nb of downvotes the resource has
  downVotes: number;
  // the vote the user put for that resource (if they voted)
  userVote?: UserVote;
  // all liderbord comments from the user
  comments?: string[];
}

export default Resource;
