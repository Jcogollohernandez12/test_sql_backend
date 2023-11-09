import db from '../../config/config.js';
import RandomIdGenerator from '../../utils/form/ramdon_generator.js';
import DateEntity from '../../utils/form/date_entity.js';


const idGenerator = new RandomIdGenerator(1, 100000000);

export const createPersonQuery = async (name, lastname, cc, email, type_cc) => {
    const name_lastname = name + ' ' + lastname;
    const number_type_cc = type_cc + ' ' + cc;
    const id = idGenerator.generateRandomId();
    const dateEntity = new DateEntity();
    const date_create = dateEntity.currentDate;
  
    const query = 'INSERT INTO person (id, name, lastname, cc, email, type_cc, date_create, number_type_cc, store_create, lastname_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
    return new Promise((resolve, reject) => {
      db.query(query, [id, name, lastname, cc, email, type_cc, date_create, number_type_cc, 1, name_lastname], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };