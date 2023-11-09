import express from 'express';
import { createPerson } from '../controller/operations/person/create_person_controller.js';
import { login } from '../controller/operations/user/auth_controller.js';

const router = express.Router();

// Rutas
router.post('/createPerson', createPerson);
router.post('/login', login);

export default router;