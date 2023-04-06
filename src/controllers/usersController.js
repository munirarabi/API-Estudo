// const { json } = require("express");
const usersModel = require("../models/usersModel");


const getAll = async (_req, res) => {
  try {
    const users = await usersModel.getAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// const getUserId = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const getUserId = await usersModel.getUserId(id);

//     if (!getUserId[0]) {
//       return res.status(500).json({ message: "Nenhum usuário com esse ID" });
//     }

//     return res.status(200).json(getUserId);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

const getUserName = async (req, res) => {
  const { username, password } = req.params;

  try {
    const getUserName = await usersModel.getUserName(username, password);

    if (getUserName.length > 0) {
      return res.status(200).json(getUserName[0]);
    }

    return res.status(400).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    return res.status(400).json([{ id: 0 }]);
  }
};

const createUser = async (req, res) => {
  try {
    const createdUser = await usersModel.createUser(req.body);

    return res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.sqlMessage });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await usersModel.deleteUser(id);

    if (deletedUser.affectedRows == 1) {
      return res.status(202).json({ message: "Deletado com sucesso!" });
    }
  } catch (error) {
    return res.status(204).json(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await usersModel.updateUser(id, req.body);

    if (updatedUser.affectedRows == 1) {
      console.log(updatedUser);
      return res
        .status(202)
        .json({ message: "Usuário atualizado com sucesso!" });
    }
  } catch (error) {
    return res.status(204).json({ message: "Erro" });
  }
};

module.exports = {
  getAll,
  // getUserId,
  getUserName,
  createUser,
  deleteUser,
  updateUser,
};
