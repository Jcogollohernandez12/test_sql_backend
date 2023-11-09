import { createUserQuery, loginQuery } from '../../querys/user_query.js';

export const createUser = async (req, res) => {
    const { Username, password } = req.body;
    try {
        const results =  await loginQuery(Username, password);
        if(results.length !== 0){  
          res.status(200).json({ message: 'Usuario existente', userCurrent: {} });
        }else{
          await createUserQuery(Username, password);
          res.status(200).json({ message: 'Usuario creado con exito!', userCurrent: { Username: Username, password: password } });
        }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
  