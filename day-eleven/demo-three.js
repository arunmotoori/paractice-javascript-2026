function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Server failed");
    }, 2000);
  });
}

async function sample() {
  try{
    const result = await getData();
    console.log(result);
  }catch(error){
     console.log(error);
  }
  console.log("End of program");
}

sample();