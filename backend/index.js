const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
