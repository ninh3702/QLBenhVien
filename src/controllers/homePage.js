let getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};

let getFunctionaoda = (req, res) => {
  return res.render("Functionaoda.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getFunctionaoda: getFunctionaoda,
};
