const app = require("./app");

require("dotenv").config();
// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || PORT;

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
