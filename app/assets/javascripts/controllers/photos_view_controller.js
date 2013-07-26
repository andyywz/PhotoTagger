var PhotosViewController = function () {
  var that = this;
  $('.creation').on("click", function (event) {
    event.preventDefault()
    var photopath = $(this.form).find("input[name='photo[photopath]']").val();
    var p = new Photo({ "photopath": photopath });
    p.save(function(){return Photo.fetch(function(){return that.render()})})
  })
}

PhotosViewController.prototype.render = function () {
  var $element = $('.photo')
  console.log(Photo.all)
  console.log(Photo.all.slice(-1));
  console.log(Photo.all.slice(-1)[0].photopath);
  $element.prepend('<img src="' + Photo.all.slice(-1)[0].photopath + '">')
};

