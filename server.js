require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa a SQL Server');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
}

start();
