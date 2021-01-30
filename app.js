/// THIS FILE CONTAINS MIDDLEWARES
const tellYourStoryRouter = require("./tellYourStoryForm/tellYourStoryForm");
const getInTouchRouter = require("./getInTouchForm/getInTouchForm");
const preOrderRouter = require("./preOrder/preOrder");
const subscribeRouter = require("./subscribe/subscribe");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const dotenv = require("dotenv");
const testRouter = require("./test/test");

app.use(cors());
app.use(express.json());

dotenv.config();

app.get('/', (req,res)=>{
  res.send('HELLO FROM SERVER')
})

app.use("/", [
  tellYourStoryRouter,
  getInTouchRouter,
  preOrderRouter,
  testRouter,
  subscribeRouter,
]);

////////////////// UPLOAD FILES
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tellYourStoryForm/uploads"); //////////////////where is it better to save files for uploading?
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).array("file"); //if we need 1 file to upload then ....({ storage: storage }).single("file")

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});
////////////////////
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  //// TAKE ALL THE PATHS (*) I'VE EVER CREATED
  ////__dirname, 'frontend', 'build', 'index.html' - WE GET NEEDED PATH VIA LINE 24 //BUILD/INDEX.HTML
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

module.exports = app;

//Payment system

const SERVER_CONFIGS = require("./payment/constants/server");

const configureServer = require("./payment/server");
const configureRoutes = require("./payment/routes");

// const app2 = express();

configureServer(app);
configureRoutes(app);
