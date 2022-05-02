enum ResourceType {
  Audio = "Audio",
  Document = "Document", // Default for any Liderbord markdown doc
  Image = "Image",
  Link = "Link", // (default for any internet resource that is unspecified)
  Video = "Video",
  Unknown = "UNKNOWN",
}
export function stringToResourceType(resourceString: string): ResourceType {
  switch (resourceString) {
    case "Audio":
      return ResourceType.Audio;
    case "Document":
      return ResourceType.Document;
    case "Image":
      return ResourceType.Image;
    case "Link":
      return ResourceType.Link;
    case "Video":
      return ResourceType.Video;

    default:
      return ResourceType.Unknown;
  }
}
export default ResourceType;
