const info = (message) => {
    if (process.env.DB_HOST === 'localhost') {
        console.log(message);
    } else {

    }
};

const error = (message) => {
    if (process.env.DB_HOST === 'localhost') {
        console.log(message);
    } else {
        
    }
};

module.exports = {
    info,
    error,
};