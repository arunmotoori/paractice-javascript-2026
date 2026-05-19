// let name = "Arun Motoori";
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

// let name = "    Arun Motoori      ";
// console.log(name);
// console.log(name.trim());

// let text = "Welcome to JavaScript";
// console.log(text.includes("JavaScript"));
// console.log(text.includes("Python"));

// let text = "JavaScript,Playwright,TypeScript";
// let ar = text.split(",");
// console.log(ar);

// let text = "Hello Java";
// console.log(text.replace("Java","JavaScript"));

// let text = "Arun Motoori";
// console.log(text.substring(5,9));
// console.log(text.slice(5,9));

// let text = "JavaScript made easy";
// console.log(text.startsWith("JavaScript"));
// console.log(text.endsWith("easy"));

// let text = "Your OTP is 834521";
// console.log(text.match(/\d+/)[0]);

// let a = "Hello 5";
// console.log(a.match(/\d/));
// console.log(a.match(/\d/)[0]);  // unsafe version
// console.log(a.match(/\d/)?.[0]); // safe version

// let text = "Order ID: 56789";
// console.log(text.match(/\d+/)?.[0]);

// let text = "hello123";
// console.log(text.match(/[a-z]/)?.[0]);
// console.log(text.match(/[a-z]+/)?.[0]);

// let text = "HELLO123";
// console.log(text.match(/[A-Z]+/)?.[0]);

// let text = "Arun Motoori";
// console.log(text.match(/\s/));

// let email = "test@gmail.com";
// console.log(email.match(/gmail/)?.[0]);

// let text = "$123abc";
// console.log(text.match(/./)?.[0]);
// console.log(text.match(/../)?.[0]);
// console.log(text.match(/.../)?.[0]);
// console.log(text.match(/..../)?.[0]);
// console.log(text.match(/...../)?.[0]);
// console.log(text.match(/.{6}/)?.[0]);
// console.log(text.match(/.+/)?.[0]);
// console.log(text.match(/.*/)?.[0]);

// let text = "";
// console.log(text.match(/.*/));

// let text = "Name: Arun Motoori";
// console.log(text.match(/Name: .*/)?.[0]);

// let text = "color";
// console.log(text.match(/colou?r/));

// let price = "Price: 499.99";
// console.log(price.match(/\d+\.\d+/)?.[0]);

// let phone = "9876543210";
// console.log(phone.match(/^\d{10}$/)?.[0]);

// let email = "arun@gmail.com";
// console.log(email.match(/^[a-z]+/)?.[0]);