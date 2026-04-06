import { Router } from "express"
import { createStudent } from "../controller/studentController.js"


const router = Router();
router.route('/student').post(createStudent);

export default router