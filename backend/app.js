/// THIS FILE CONTAINS MIDDLEWARES

const contactRouter = require("./contact/contact");
const preOrderRouter = require("./preOrder/preOrder");
const express = require("express");
const cors = require("cors");
const app = express();
const testRouter = require("./test/test");

app.use(cors());
app.use(express.json());
// app.use("/", router);
// app.listen(3001, () => console.log("Server Running"));

app.use("/", [contactRouter, preOrderRouter]);
// app.use("/", preOrderRouter);

// app.use('/payment', paymentRouter)

app.use("/test", testRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  //// TAKE ALL THE PATHS (*) I'VE EVER CREATED
  ////__dirname, 'frontend', 'build', 'index.html' - WE GET NEEDED PATH VIA LINE 24 //BUILD/INDEX.HTML
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

module.exports = app;
