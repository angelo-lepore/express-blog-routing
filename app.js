// importiamo express
const express = require("express");
const app = express();
const port = 3020;

// importiamo router
const posts_router = require("./routers/posts");

// mettiamo il server in ascolto
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

// definiamo la prima rotta
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// configuriamo gli asset statici
app.use(express.static("public"));

// indichiamo con use che esistono nuove rotte
app.use("/posts", posts_router);
