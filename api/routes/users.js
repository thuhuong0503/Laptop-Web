const UserController = require("../controllers/UserController");
const router = require('express').Router();
const { verifyAdmin } = require('../utils/verifyToken');

//CREATE
router.post("/", verifyAdmin, UserController.createUser);

//UPDATE
router.put("/:id", verifyAdmin, UserController.updateUser);

//DELETE
router.delete("/:id", verifyAdmin, UserController.deleteUser);

//DESTROY
router.delete("/:id/force", verifyAdmin, UserController.destroyUser);

//GET LAPTOP
router.get("/:id", UserController.getUser);

//GET LAPTOPS
router.get("/", UserController.getUsers);

module.exports = router;