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
            time: new Date(Date.now()).toISOString(),
        };
    } catch (error) {
        console.log(sub, 'not found');
    }
};

const main = async () => {
    console.log('Fetching Subreddits...');
    const data = await Promise.all(SUBS.map(handleSub));
    console.log('Saving to Mongo');
    const db = await mongo.init('reddit-active-users');
    await db.create(data);
    console.log('Updated Reddit active User Info');
};

main();