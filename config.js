// const localSettings = require('./config.local');

const settings = {
    MONGO_URI: null,
    MONG_DB: 'fiona',

    SUBS: [
        'palegirls',
        'SFWRedheads',
        'Ginger',
        'redheads',
        'tightdresses',
        'RedheadedGoddesses',
        'FreckledGirls',
        'UnderwearGW',
        'RealGirls',
        'SFWRedheads',
        'GoneMild',
        'GWNerdy',
        'OriginalBabes',
        'Brazzers',
        'RealityKings',
        'TrueAmateurs',
        'NSFW',
        'NSFW_GIF',
        'NSFW_GIFS',
        'NSFW_HTML5',
        'iWantToFuckHer',
        'PornVids',
        'NSFWVideos',
        'PassionX',
        'HighResNSFW',
        'Amateur',
        'HomemadeXXX',
        'Nsfw_Amateurs',
        'RandomSexiness',
        // 'AmatureBondage',
        'AssOnTheGlass',
        'TheUnderBun',
        'Booty',
        'booty_gifs',
        'BDSM',
        'OnOff',
        'GirlsInYogaPants',
        'GirlsInLeggings',
        'Pajamas',
        'SeeThru',
        'GirlsInSchoolUniforms',
        'Stockings',
        'NSFWCosplay',
        'NSFWOutfits',
        'GoneWild',
        'GWCumSluts',
        'WorkGoneWild',
        'Curls',
        'SexyFrex',
        'PiercedTits',
        'PiercedNSFW',
        'FireCrotch',
        'SexyGirlsInBoots',
        'Pokies',
        // 'NipSlip',
        'Boobs',
        'Boobies',
        'Cleavage',
        'BoobBounce',
        'TheUnderBoob',
        'Lingerie',
        'PantyFetish',
        'Upskirt',
        'Bikinis',
        'Undies',
        'CheekyBottoms',
        'Bottomless',
        'NoPanties',
    ],
};

// const settingsWithLocal = Object.keys(settings).reduce((a, key) => {
//     a[key] = localSettings && localSettings[key] || settings[key];
//     return a;
// }, {});

module.exports = Object.keys(settings).reduce((a, key) => {
    a[key] = process.env[key] || settingsWithLocal[key];
    return a;
}, {});
