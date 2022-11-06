import express, { Router ,Request,Response,NextFunction} from "express"

const route: Router = express.Router()

const auth = (req: Request, res: Response, next: NextFunction) => {
    console.log("authinticated")
    next()
}

route.get('/api', auth, (req: Request, res: Response) => {
    res.json({msg: "Hi there"})
})


export default route