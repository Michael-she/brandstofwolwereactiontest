// Using promise-based mysql2
import mysql from 'mysql2/promise';


const connection = await mysql.createConnection(process.env.DATABASE_URL);

// Define and export the GET method
export async function GET() {
  try {
    // Create a connection to the database
    const connection = await mysql.createConnection(process.env.DATABASE_URL);

    // Execute your query
    const query = `SELECT * FROM BrandstofWolweLeaderboard ORDER BY time ASC;`;
    const [results] = await connection.query(query);

    // Close the connection pool
    await connection.end();

   

    // Return the results as JSON
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Ensure no caching for this API call
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
