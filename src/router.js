const express = require("express");
const router = express.Router();

const usersController = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");

router.get("/users/:username&:password", usersController.getUserName);
router.get("/users", usersController.getAll);
// router.get("/users/:id", usersController.getUserId);
router.post("/users", usersMiddleware.validateBodyPOST, usersController.createUser);
router.delete("/users/:id", usersController.deleteUser);
router.put("/users/:id", usersMiddleware.validateBodyPUT, usersController.updateUser);

module.exports = router;
