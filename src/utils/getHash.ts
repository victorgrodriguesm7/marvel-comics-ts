import crypto from 'crypto';


const getHash = () => {
    let ts = Date.now();
    let hash = crypto.createHash('md5')
        .update(ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_API_KEY).digest('hex');
    return "&ts="+ts+"&hash="+hash;
}

export default getHash;