let start =Number(prompt("Enter The Fast Value :"));
let end =Number(prompt("Enter The Last Value"));
let rejact =Number(prompt("Enter The Rejact Value"));

for(let i=start; i<=end; i++){
  if(i !=rejact){
    console.log(i + "er namta start")

    for(let j=1; j<=10; j++){
      let cancelLine =i*j;
      if(cancelLine !==30 && cancelLine !==40){
        console.log(i + "X" + j + "=" + cancelLine)
      }
      
    }
  
    if(i==end){
      console.log("All Done")
    }else{
      console.log(i + "er namta sesh")
      console.log("=================")
    }
  }
 
}