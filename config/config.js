const httpsPort = parseInt(process.env.HTTPS_PORT, 10)
const secretKey = process.env.SECRET_KEY;
const mongoURL = process.env.MONGO_URL;
const jwtExpiryInSec = parseInt(process.env.JWT_EXPIRY_IN_SEC, 10)

module.exports = {
    httpsPort,
    secretKey,
    mongoURL,
    jwtExpiryInSec
};