import express from 'express';
import { createPerson } from '../controller/operations/person/create_person_controller.js';
import { login } from '../controller/operations/user/auth_controller.js';
import { createUser } from '../controller/operations/user/register_controller.js';
const router = express.Router();

// Rutas
router.post('/login', login);
router.post('/createUser', createUser);
router.post('/createPerson', createPerson);


export default router;