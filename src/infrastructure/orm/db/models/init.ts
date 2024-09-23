import User from "./user.model";

const pgInit = async () => {
    try {
        await User.sync({ alter: true });
    } catch (error : any) {
        console.error('Unable to connect to the database:', error.message);
    }
}

export default pgInit;