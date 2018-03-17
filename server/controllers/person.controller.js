'use strict' 

import Person from '../models/person';
import Logger from '../helpers/logger';
import RandomInt from 'random-int';
import Constants from '../configs/constants';

class PersonController {
    getRandom(req, res, next) {
        try {
            const person = new Person();
            let randomId = RandomInt(1,Constants.personCount);
            person.getById({ id: randomId }).then((result) => {
                if (result) {
                    res.status(200).send(result);
                } else {
                    res.status(204).send("No data");
                }
            }).catch((err) => {
                Logger.log(`Unable to load data. \n ${err}`);
                res.status(500).send('Something broke!')
            });

        } catch (err) {
            next(err);
        }
    }
}

export default new PersonController();