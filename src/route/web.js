import express from "express";
import homePage from "../controllers/homePage";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homePage.getHomePage);
  router.get("/botgiata3", homePage.getFunctionaoda);
  return app.use("/", router);
};
module.exports = initWebRoutes;
