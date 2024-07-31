function proBaseEg(){
    let prom =new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("This is a base Eg for Reject")
        resolve("This is a base Eg for Resolve")
    }, 1000);
})
console.log(
    prom.then((val) => {
    console.log(val);
}).catch(val => {
    console.log(val)
})
);
}
proBaseEg()
// ----------------------------------------------

function proBaseEg(a){
    let prom =new Promise((resolve,reject) => {
    setTimeout(() => {
        if(a== "resolve"){
        resolve("This is a base Eg for Resolve")
        }
        else if(a === 'reject'){
        reject("This is a base Eg for Reject")
    }
    }, 1000);
})
console.log(
    prom.then((val) => {
    console.log(val);
}).catch(val => {
    console.log(val)
})
);
}
proBaseEg("reject")
/*
------------------------------------------------


function proBaseEg(a){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(a== "resolve"){
        return resolve("A")
        }
        else if(a === 'reject'){
        return reject("B")
    }
    }, 1000);
})
console.log(promiserEg())
    promiseEg().then((val) => {
    console.log(val);
}).catch(val => {
    console.log(val)
})
);
}
proBaseEg("reject")*/
