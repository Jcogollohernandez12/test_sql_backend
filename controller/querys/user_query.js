import db from '../../config/config.js';

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
