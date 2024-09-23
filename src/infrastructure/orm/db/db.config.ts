import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT as string, 10),
        dialect: process.env.DB_DIALECT as 'postgres',
        logging: false,
    }
);

export default sequelize;