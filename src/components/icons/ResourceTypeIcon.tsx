import ResourceType from "../../model/resourceType";
import { ReactComponent as AudioTypeIcon } from "../../res/icons/resourceTypes/audio_type.svg";
import { ReactComponent as DocumentTypeIcon } from "../../res/icons/resourceTypes/document_type.svg";
import { ReactComponent as ImageType } from "../../res/icons/resourceTypes/img_type.svg";
import { ReactComponent as URLType } from "../../res/icons/resourceTypes/URL_type.svg";
import { ReactComponent as VideoType } from "../../res/icons/resourceTypes/video_type.svg";

export default function ResourceTypeIcon({
  type,
  size,
}: {
  type: ResourceType | undefined;
  size?: number;
}) {
  const defaultSize = 32;
  switch (type) {
    case ResourceType.Document:
      return (
        <DocumentTypeIcon
          width={size ?? defaultSize}
          height={size ?? defaultSize}
        />
      );

    case ResourceType.Audio:
      return (
        <AudioTypeIcon
          width={size ?? defaultSize}
          height={size ?? defaultSize}
        />
      );

    case ResourceType.Image:
      return (
        <ImageType width={size ?? defaultSize} height={size ?? defaultSize} />
      );

    case ResourceType.Link:
      return (
        <URLType width={size ?? defaultSize} height={size ?? defaultSize} />
      );

    case ResourceType.Video:
      return (
        <VideoType width={size ?? defaultSize} height={size ?? defaultSize} />
      );

    default:
      // For now we will admit that link type is the default type
      return (
        <URLType width={size ?? defaultSize} height={size ?? defaultSize} />
      );
  }
}
