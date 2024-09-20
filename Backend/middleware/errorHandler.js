const errorHandler = (err, req,res,next)=>{
    let statuscode = 500;
    let errorMessage= err.message
    // console.log('Global handler runs')
    if(err.name === 'VallidationError'){
        console.log('error',err.errors)
        const message = Object.values(err.errors).map(val=>val.message)
            // return val.message
        
        statuscode = 400
        errorMessage = message
    }
    else {
        console.log(err.message)
    }
        res.status(statuscode).json({
        message:errorMessage
    })
    
    
}

module.exports = errorHandler