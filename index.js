import express from 'express'
const app =express()


















app.use(express.static("src"))
app.use(express.static("build/contracts"))
const listner = app.listen(process.env.PORT||3200,()=>{
    console.log('port number is '+listner.address().port)
})
