import express, { Express, Request, Response } from "express"

const app: Express  = express();

app.get('/api', (req: Request, res: Response) => {
    res.json({msg: "Hi there"})
})

app.listen(3333, () => console.log(`Listing on port 3333`));