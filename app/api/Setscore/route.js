import mysql from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';
import bodyParser from 'body-parser';
import { NextResponse } from 'next/server';
const connection = mysql.createConnection(process.env.DATABASE_URL);

export async function POST(req) {
    


       const {name, score} = await req.json();

       console.log(name);
        
        const currentDate = new Date().toISOString().slice(0, 10);

        const query = `INSERT INTO BrandstofWolweLeaderboard (name, time, date) VALUES ('${name}', ${score}, '${currentDate}')`;
        console.log(query);
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.log(err.message);
                return NextResponse.json({ message: 'Error' });
            } else {
             return NextResponse.json({ message: 'Success' });
            }
        });
        return NextResponse.json({ message: 'Eh' });
}



// Path: app/api/leaderboard/route.js
























