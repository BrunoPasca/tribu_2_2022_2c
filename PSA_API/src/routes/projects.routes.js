import { Router } from "express";

router.get('/editProject/:id', (req,res) => {
	res.send(req.params);
})

router.get('/eliminarProject/:id', (req,res) => {
	res.send(req.params);
})
export default router;
