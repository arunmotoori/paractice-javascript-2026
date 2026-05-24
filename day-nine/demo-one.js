function bakeCake() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve("Cake baked");

    }, 3000);

  });

}

// bakeCake().then((result)=>{
//     console.log(result);
// });

const result = await bakeCake();
console.log(result);
