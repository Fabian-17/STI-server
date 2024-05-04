import bcrypt from 'bcrypt';

export const hashPassword = async (text) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(text, salt);
};