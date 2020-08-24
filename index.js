const axios = require("axios");
const mongo = require('./data-layer');
const { SUBS } = require('./config');

const handleSub = async (sub) => {
    try {
        const res = await axios.get(`https://www.reddit.com/r/${sub}/about.json`)
        return {
            sub: sub,
            subscribers: res.data.data.subscribers,
            activeUsers: res.data.data.active_user_count,
            time: Date.now(),
        };
    } catch (error) {
        console.log(sub, 'not found');
    }
};

const main = async () => {
    const data = await Promise.all(SUBS.map(handleSub));
    const db = await mongo.init('reddit-active-users');
    await db.create(data);
};

main();