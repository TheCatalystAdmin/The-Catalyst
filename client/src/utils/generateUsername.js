export const generateUsername = (email) => {
    const username = email.split('@')[0];
    const random = Math.floor(Math.random() * 1000);
    return `@${username}${random}`;
}