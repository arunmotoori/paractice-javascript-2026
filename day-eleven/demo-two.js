try{
    throw new Error("Just like that");
}catch(error){
    console.log(error.message);
}
console.log("End of the program");