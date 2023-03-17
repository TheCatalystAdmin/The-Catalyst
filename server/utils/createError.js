const createError = (msg, status) => {
    const err = new Error();
    err.status = status;
    err.message = msg;
    console.log(err.message);
    return err;
}
module.exports = createError;