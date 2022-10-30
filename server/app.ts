import express, { Request, Response } from 'express';

const app = express();

type Person = {
    name: string;
    age: number;
    birth: string;
}

type Data = {
    personData: Person;
}

const data: Data = {
    personData: {
        name: '박주홍',
        age: 24,
        birth: '1999.04.29'
    }
}

app.get("/", (req: Request, res: Response) => {
    res.send(data);
});

app.listen(3000, function(){
    console.log("app.ts 실행됌");
})