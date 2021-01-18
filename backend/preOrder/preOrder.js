const {Router} = require("express");
const router = Router();
// const cors = require("cors");
const nodemailer = require("nodemailer");
const ck = require("ckey");

const userEmail = ck.EMAIL;
const userPassword = ck.PASSWORD;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/preorder", (req, res) => {
  const amount = req.body.amount;
  const totalOrder = req.body.totalOrder;
  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  const mail = {
    from: name,
    to: userEmail,
    subject: "BOOK PREORDER",
    html: `<h2>Hello, Sara, Cristina! You have books preordered by: <h1>${name}</h1></h2>
            <h1>Amount of books ordered: ${amount}</h1>
            <h1>For the total amount of: ${totalOrder} EUR</h1>  
            <h2>Email to contact: <h1>${email}</h1></h2>
            <h2>Phone number: <h1>${phone}</h1></h2>
            <h2>Postal address: <h1>${address}</h1></h2>
            <h2>Additional info if any: ${message}</h2>
            <img src='https://www.routledge.com/rsc/images/crccms/TFG202001-Authors-r3.jpg' alt='authors_logo'/>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "SENT" });
    }
  });
});

module.exports = router;
