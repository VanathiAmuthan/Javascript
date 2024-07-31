async function a(){
    await b();
    setTimeout(()=>{
        console.log("ABC");
    },1000);
}
async function b(){
    await c(); 
    setTimeout(()=>{
        console.log("BCD");
    },1000);
}
async function c(){ 
    setTimeout(()=>{
    console.log("CDE");
    },1000);
}
a()
b()
c()