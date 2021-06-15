class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('2314356476');
    }
}
module.exports = new NewsController();
