
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partial = function (req, res) {
  var name = req.params.name;
  console.log(__dirname);
  res.render('partials/partial' + name);
};