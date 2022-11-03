require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    map: process.env.REACT_PUBLIC_MAP_KEY
}

module.exports = { config };