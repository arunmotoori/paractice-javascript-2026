function bakeCake() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve("Cake baked");

    }, 3000);

  });

}

async function sample(){
    const result = await bakeCake();
    console.log(result);
}

sample();

