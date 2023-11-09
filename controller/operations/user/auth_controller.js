import jwt from 'jsonwebtoken';
import { loginQuery, updateTokenQuery } from '../../querys/user_query.js';

export const login = async (req, res) => {
  console.table(req.body);
  const { Username, password } = req.body;

  try {
    const results = await loginQuery(Username, password);
    if (results.length === 1) {
      const userCurrent = results[0];
      const token = jwt.sign({ userCurrent: userCurrent.Username, id: userCurrent.id }, 'clave_secreta', { expiresIn: '1h' });
      await updateTokenQuery(token, userCurrent.id);

      userCurrent.token = token;
      res.status(200).json({ message: 'Inicio de sesión exitoso', userCurrent: userCurrent });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
