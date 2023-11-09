import db from '../../config/config.js';
import RandomIdGenerator from '../../utils/form/ramdon_generator.js';
import DateEntity from '../../utils/form/date_entity.js';

export const loginQuery = async (Username, password) => {
  const query = 'SELECT * FROM Users WHERE Username = ? AND password = ?';

  return new Promise((resolve, reject) => {
    db.query(query, [Username, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const updateTokenQuery = async (token, userId) => {
  const updateTokenQuery = 'UPDATE Users SET token = ? WHERE id = ?';

  return new Promise((resolve, reject) => {
    db.query(updateTokenQuery, [token, userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const createUserQuery = async (username, password) => {
    const idGenerator = new RandomIdGenerator(1, 100000000);
    const id = idGenerator.generateRandomId();
    const Username = username;
    const dateEntity = new DateEntity();
    const token = "";
    const date_create = dateEntity.currentDate;
  
    const query = 'INSERT INTO Users (id, Username, password, date_create, token) VALUES (?, ?, ?, ?, ?)';
  
    return new Promise((resolve, reject) => {
      db.query(query, [id, Username, password, date_create, token], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
