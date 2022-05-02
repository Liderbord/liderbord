import Moralis from "moralis";
import Liderbord from "../model/liderbord";
import { useMoralisCloudFunction } from "react-moralis";

export class Service {
  private static createLiderbordFunction: string = "createLiderbord";
  private static getLiderbordByIdFunction: string = "getLiderbordById";

  static async createLiderbord(
    title: string,
    description: string,
    tags: string[]
  ): Promise<string> {
    const params = { title: title, desc: description, tags: tags };
    return await Moralis.Cloud.run(Service.createLiderbordFunction, params);
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
}
