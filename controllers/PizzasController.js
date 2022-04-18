module.exports = {
    listar: (req, res) => {
        res.render("pizzas.ejs", { pizzas, busca: "" });
      },
}