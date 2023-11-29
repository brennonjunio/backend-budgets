// database.ts
import mysql, { Pool, PoolConnection, RowDataPacket } from 'mysql2/promise';
require("dotenv").config();

class Database {
  
  private pool: Pool;

  constructor() {
    this.pool = mysql.createPool({
      host:process.env.DB_HOST,
      user:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '3000'),
      database:process.env.DB_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
    
  async execute(query: string, values?: any[]): Promise<RowDataPacket[] | null> {
    
    let connection: PoolConnection | null = null;

    try {
      connection = await this.pool.getConnection();
      const [rows] = await connection.execute(query, values);
      return rows as RowDataPacket[];
    } catch (error) {
      console.error('Erro na consulta SQL:', error);
      return null;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
}

const db = new Database();
export default db;
