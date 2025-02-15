const fun1 =() =>{
    console.log("FUnction 1 ");
}

const fun2 = async ()=>{
    //await waits till the res or err is captured
    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("Function 2 Executed")
         if(true) {resolve("Data Received")}
         else{reject("Error")}
        },3000)
     })
    await prom.then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
}
const fun3 =()=>{
    console.log("FUnction 3 ");
}
fun1();
fun2();
fun3();
