import path from 'path';

class HomeController {
    //Load the index page when server started
    index(req, res) {
        var indexPath = path.join(__dirname,"/..","/public/html/index.html");
        res.sendFile(indexPath);
    };
}

export default new HomeController();