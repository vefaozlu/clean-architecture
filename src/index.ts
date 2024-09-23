import app from './server/server';
import pgInit from './infrastructure/orm/db/models/init';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port, async () => {
    console.log(`Connecting to database...`);
    await pgInit();
    console.log(`Database connected!`);

    console.log(`App started on ${port}`);
})