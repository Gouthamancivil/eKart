import express from 'express'

//router instance

const userRouter=express.Router()


userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;


