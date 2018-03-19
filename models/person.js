'use strict'

import Promise from 'promise';
import Constants from '../configs/constants';

class Person {
    getById(args) {
        return new Promise((resolve, reject) => {
            let {
                id
            } = args;
            let personalData = Constants.personData;

            let result = personalData.filter((x) => {
                return x.id === id;
            });

            resolve(result);
        });
    };
}

export default Person;