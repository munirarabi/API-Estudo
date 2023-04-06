const app = require("./app");


require("dotenv").config();
// const PORT = process.env.PORT || 3306;
const PORT = 3306;

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
