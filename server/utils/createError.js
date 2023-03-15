const createError = (msg, status) => {
    const err = new Error(msg);
    err.status = status;
    err.message = msg;
    console.log(err.message);
    return err;
}
module.exports = createError;