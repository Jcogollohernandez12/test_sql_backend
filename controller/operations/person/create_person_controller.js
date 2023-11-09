import { createPersonQuery } from '../../querys/person_query.js';

export const createPerson = async (req, res) => {
  console.table(req.body);
  const { name, lastname, cc, email, type_cc } = req.body;

  try {
  const results =  await createPersonQuery(name, lastname, cc, email, type_cc);
    res.status(201).json({ message: 'Persona creada con éxito', personResult: { name:name, lastname: lastname, cc: cc, email: email} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en la inserción de persona' });
  }
};
