class HomeController {
    index(req, res) {
        res.send("Hello world");
    };
}

export default new HomeController();