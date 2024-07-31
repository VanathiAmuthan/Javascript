isLocationFound=(loc,time)=>{
    isLoc="SKCET";
    t=2000;
    if(loc === isLoc && t <= time){
        return true;
}
else{
    return false;
}
};
function locationFinder(){
    time=2000;
    loc="SKCT";
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                return locFound("Location Found");
            }
            else{
                return locNotFound("Location Not Found");
            }
        },time);
    });
}
locationFinder()
.then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
});