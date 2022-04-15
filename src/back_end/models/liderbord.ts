import Moralis from "moralis";


export class Liderbord {

    title: string="";
    desc: string="";
    tags: string[] | undefined;
    nbVotes: number=0;
    nbRessources: number=0;
    
   
    constructor(title: string,desc: string) {
        
        this.title=title;
        this.desc=desc;

    }

    
  async createLiderbord(){
    const params =  { title: this.title,desc:this.desc };
     await Moralis.Cloud.run("createLiderbord", params);

  }
    
  
   
  }



  