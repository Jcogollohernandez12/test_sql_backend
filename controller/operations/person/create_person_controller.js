import { createPersonQuery } from '../../querys/person_query.js';

export const createPerson = async (req, res) => {
  console.table(req.body);
  const { name, lastname, cc, email, type_cc } = req.body;

  try {
    await createPersonQuery(name, lastname, cc, email, type_cc);
    res.status(201).json({ message: 'Persona creada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en la inserción de persona' });
  }
};
