import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    res.send("Welcome to library")
});

export default router