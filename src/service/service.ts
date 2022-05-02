import Moralis from "moralis";
import Liderbord from "../model/liderbord";
import Resource from "../model/resource";
import ResourceType from "../model/resourceType";

export class Service {
  private static createLiderbordFunction: string = "createLiderbord";
  private static createResourceFunction: string = "createResource";
  private static getLiderbordByIdFunction: string = "getLiderbordById";
  private static searchLiderbordByNameFunction : string = "searchLiderbord";
  

  static async createLiderbord(
    title: string,
    description: string,
    tags: string[]
  ): Promise<string> {
    const params = { title: title, desc: description, tags: tags };
    return await Moralis.Cloud.run(Service.createLiderbordFunction, params);
  }

  static searchLiderbordByName(name: string): Liderbord | undefined {
    Service.searchLiderbordByNamePrivate(name ?? "").then((value) => {
      console.log(value);
      return value;
    });
    return;
  }

  private static async searchLiderbordByNamePrivate(name: string) : Promise<Liderbord>{
    const liderbords: Liderbord = await Moralis.Cloud.run(Service.searchLiderbordByNameFunction);
    return liderbords;
  }

  static getLiderbord(id: string): Liderbord | undefined {
    Service.getLiderbordFunction(id ?? "").then((value) => {
      console.log(value);
      return value;
    });
    return;
  }
  private static async getLiderbordFunction(id: string): Promise<Liderbord> {
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
