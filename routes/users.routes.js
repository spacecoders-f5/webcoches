const {Router} = require("express");
const usersController = require("../controllers/usersController")
userRouter = Router();

userRouter.get("/newUser", usersController.newUserform);
userRouter.post("/newUser", usersController.newUser);
userRouter.get("/listadoUsers", usersController.usersList);
userRouter.get("/userById/:id", usersController.findUserById);
userRouter.post("/deletedUserById", usersController.deleteUserById);
userRouter.post("/updatedUserById", usersController.updateUserById);

module.exports = userRouter;
