// Using promise-based mysql2
import mysql from 'mysql2';



// Define and export the GET method
export async function GET() {
  try{
    // Create a connection to the database
    const connection =  mysql.createConnection(process.env.DATABASE_URL);
    return new Promise((resolve, reject) => {
    // Execute your query
    const query = `SELECT * FROM BrandstofWolweLeaderboard ORDER BY time ASC;`;
    connection.query(query, (err, results, fields) => {
      console.log(results);
      resolve( new Response(JSON.stringify(results), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          // Ensure no caching for this API call
          'Cache-Control': 'no-store, max-age=0',
        },
      })
    )})});

    // Close the connection pool
     

   

    // Return the results as JSON
    
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
