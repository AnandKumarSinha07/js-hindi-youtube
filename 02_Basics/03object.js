const mySmbol=Symbol("key1")

const jsUser={
    name:"Anand",
    [mySmbol]:"symbol",
    "full name":"Kumar sinha",
    age:18,
    location:"bihar",
    isLogedin:false,
}
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySmbol]);

jsUser.age=19;
console.log(jsUser.age)
// AFTER APPLYING FREEZING CONCEPT OJECT GOT FREEZED HERE
//Object.freeze(jsUser)
jsUser.age=20;
console.log(jsUser.age);

jsUser.invite=function(){
    console.log("invite1");
}

console.log(jsUser.invite())


jsUser.invite2=function(){
    console.log(`my name is ${this.name}`)
}

console.log(jsUser.invite2())