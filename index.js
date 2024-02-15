const {app}=require('./app')

const PORT=process.env.PORT||4200

app.listen(PORT,()=>{
    console.log(`server running: PORT ${PORT}`)
    }
)