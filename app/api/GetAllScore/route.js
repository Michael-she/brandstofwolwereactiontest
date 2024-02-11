'use server'

import mysql from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';
import bodyParser from 'body-parser';
import { NextResponse } from 'next/server';
const connection = mysql.createConnection(process.env.DATABASE_URL);

export async function GET() {

    const query = `SELECT * FROM BrandstofWolweLeaderboard ORDER BY time ASC ;`;
    console.log(query);

    return new Promise((resolve, reject) => {
    connection.query(query, (err, results, fields) => {
        if (err) {
            console.log(err.message);
            reject( NextResponse.json({ message: 'Error' }));
        } else {
         resolve (NextResponse.json(results));
        }
    });
});



}