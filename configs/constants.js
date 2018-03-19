'use strict'

let personalData = require('../data/users');
let personalCount = personalData.length;

let dataConfigs = {
    personCount : personalCount,
    personData : personalData
};

export default dataConfigs;

