import express from "express";
import multer from "multer";
import foodController from "../controllers/foodController.js";
// import adminMiddleWare from "../middleware/adminVerify.js";

const foodRouter = express.Router();

//image storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), foodController.addFood);
foodRouter.get("/list", foodController.listFood);
foodRouter.post("/remove", foodController.removeFood);

export default foodRouter;
