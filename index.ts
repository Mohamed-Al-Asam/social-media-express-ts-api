import express, { Express, NextFunction, Request, Response } from "express"
import route from "./src/routes/User";

const app: Express  = express();


app.use('/api', route)


app.listen(3333, () => console.log(`Listing on port 3333`));