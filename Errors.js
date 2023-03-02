async function getData(){
    try{
        // undefined.find();

        const emailError = new Error("Email already exists!");
        throw emailError
    }
    catch(error){
    //    console.log(error);
       errorHandler(error)
    }
  
}
getData()

function errorHandler(error){
    // console.log(error);
    const {name, message, stack} =error
    console.log(name,message);
    // logger.error({
    //     name,
    //     message,
    //     stack,
    // })
    console.log("Internal server error");
}

console.log("done");