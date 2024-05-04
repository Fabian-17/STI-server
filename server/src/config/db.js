import { Sequelize } from 'sequelize';
import { environments } from './environments.js';

export const sequelize = new Sequelize(
    environments.DB.DB_NAME,
    environments.DB.DB_USER,
    environments.DB.DB_PASSWORD,
    {
        host: environments.DB.DB_HOST,
        dialect: environments.DB.DB_DIALECT,
        port: environments.DB.DB_PORT,
    },
);


export const connectDB = async () => {
    await sequelize.sync()
    .then(() => console.log('Database connected!'))
    .catch((err) => console.log('Error connecting to the database', err));
};