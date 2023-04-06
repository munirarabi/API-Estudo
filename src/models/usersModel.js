const connection = require("./connection");

const getAll = async () => {
  const query = `SELECT * FROM users`;
  const [users] = await connection.execute(query);
  return users;
};

// const getUserId = async (id) => {
//   const query = `SELECT * FROM users WHERE id = ?`;
//   const [user] = await connection.execute(query, [id]);

//   return user;
// };

const getUserName = async (username, password) => {
  const query = `SELECT username, password FROM users WHERE username = ? AND password = ?`;
  const [user] = await connection.execute(query, [username, password]);

  return user;
};

const createUser = async (user) => {
  const { username, password } = user;

  // const options = {
  //   weekday: "long",
  //   timeZone: "America/Sao_Paulo",
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  // };

  // // Crie um objeto Date()
  // const data = new Date();

  // // Extraia as propriedades de data em variáveis separadas usando a sintaxe de desestruturação
  // const {
  //   getDay,
  //   getDate,
  //   getMonth,
  //   getFullYear,
  //   getHours,
  //   getMinutes,
  //   getSeconds,
  // } = data;

  // // Crie arrays para os nomes dos dias da semana e dos meses
  // const diasDaSemana = [
  //   "domingo",
  //   "segunda-feira",
  //   "terça-feira",
  //   "quarta-feira",
  //   "quinta-feira",
  //   "sexta-feira",
  //   "sábado",
  // ];
  // const meses = [
  //   "janeiro",
  //   "fevereiro",
  //   "março",
  //   "abril",
  //   "maio",
  //   "junho",
  //   "julho",
  //   "agosto",
  //   "setembro",
  //   "outubro",
  //   "novembro",
  //   "dezembro",
  // ];

  // // Use a interpolação de string para formatar a data completa
  // const dataCompleta = `${diasDaSemana[getDay()]}, ${getDate()
  //   .toString()
  //   .padStart(2, "0")} de ${meses[getMonth()]} de ${getFullYear()}, ${getHours()
  //   .toString()
  //   .padStart(2, "0")}:${getMinutes()
  //   .toString()
  //   .padStart(2, "0")}:${getSeconds().toString().padStart(2, "0")}`;

  // // Exiba a data completa
  // console.log(dataCompleta);

  // const dateUTC = new Date().toLocaleString("pt-BR", options);
  // console.log(dateUTC);

  // // const dateUTC = new Date().toLocaleString("pt-BR", {
  // //   timeZone: "America/Sao_Paulo",
  // // });

  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;

  const [createdUser] = await connection.execute(query, [username, password]);

  return { insertId: createdUser.insertId };
};

const deleteUser = async (id) => {
  const query = `DELETE FROM users WHERE id = ?`;
  const [deletedUser] = await connection.execute(query, [id]);
  return deletedUser;
};

const updateUser = async (id, user) => {
  const { username, password, status } = user;

  const query = `UPDATE users SET username = ?, password = ?, status = ? WHERE id = ?`;

  const [updatedUser] = await connection.execute(query, [
    username,
    password,
    status,
    id,
  ]);
  return updatedUser;
};

module.exports = {
  getAll,
  // getUserId,
  getUserName,
  createUser,
  deleteUser,
  updateUser,
};
