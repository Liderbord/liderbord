import {Liderbord} from "./liderbord";
import Moralis from "moralis";

export class Ressource {
  
  title: string="";
  link: string="";
  markdown: string="";
  format: string="";
  score: number=0;
  liderbordId: string="";
  
 
  constructor(title: string,link: string,markdown: string,format: string,liderbordId: string) {
      
      this.title = title;
      this.link = link;
      this.markdown = markdown;
      this.format = format;
      this.liderbordId = liderbordId;


  }

  async createResource(){
    const params =  { title: this.title,link: this.link,markdown: this.markdown,format: this.format,liderbordId: this.liderbordId};
     await Moralis.Cloud.run("createResource", params);

  }
}
