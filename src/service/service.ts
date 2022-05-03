import Moralis from "moralis";
import Liderbord from "../model/liderbord";
import Resource from "../model/resource";
import ResourceType from "../model/resourceType";
import moralisKeys from "../moralis-keys.json";

export class Service {
  private static createLiderbordFunction: string = "createLiderbord";
  private static createResourceFunction: string = "createResource";
  private static getLiderbordByIdFunction: string = "getLiderbordById";

  static async createLiderbord(
    title: string,
    description: string,
    tags: string[]
  ): Promise<string> {
    Moralis.start({
      serverUrl: moralisKeys.serverUrl,
      appId: moralisKeys.appId,
    });
    const params = { title: title, desc: description, tags: tags };
    return await Moralis.Cloud.run(Service.createLiderbordFunction, params);
  }

  static async getLiderbord(id: string): Promise<Liderbord> {
    Moralis.start({
      serverUrl: moralisKeys.serverUrl,
      appId: moralisKeys.appId,
    });
    const params = { id: id };
    const liderbord: Liderbord = await Moralis.Cloud.run(
      Service.getLiderbordByIdFunction,
      params
    );
    return liderbord;
  }

  static async addResource(resource: Resource, liderbordID: string) {
    const currentUser = Moralis.User.current();
    const userID = currentUser?.id;
    const params = {
      title: resource.title,
      link: resource.link,
      markdown: "",
      format:
        resource.type ?? resource.link === ""
          ? ResourceType.Document
          : ResourceType.Link,
      liderbordID: liderbordID,
      userID: userID,
    };
    await Moralis.Cloud.run(Service.createResourceFunction, params);
  }
}
