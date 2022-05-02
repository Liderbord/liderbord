


Moralis.Cloud.define("hello",async(request)=>{


    return "hello cloud fonction";
});





Moralis.Cloud.define("createLiderbord", async (request) => {

  
const Liderbord = Moralis.Object.extend("Liderbord");
const liderbord = new Liderbord()


liderbord.set("Topic",request.params.title);
liderbord.set("description",request.params.desc);
//liderbord.set("tag",request.params.tags);
liderbord.save()

.then((liderbord) => {
    
      // Execute any logic that should take place after the object is saved.
   
      alert('New object created with objectId: ' + liderbord.id);
 
    }, (error) => {
   
      // Execute any logic that should take place if the save fails.
   
      // error is a Moralis.Error with an error code and message.
   
      alert('Failed to create new object, with error code: ' + error.message);

    });

});