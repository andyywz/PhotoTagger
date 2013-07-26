var Photo = function(photo_attrs){
  this.id = photo_attrs.id
  this.user_id = photo_attrs.user_id;
  this.photopath = photo_attrs.photopath;
}

Photo.all = []
Photo.baseUrl = '/photo'

Photo.fetch = function(callback){
  Photo.all = []
  $.ajax({
    url: Photo.baseUrl + "s.json",
    type: "GET",
    success: function(response){
      for (var i = 0; i < response.length; i++) {
        var photo = response[i]
        Photo.all.push(new Photo(photo))
      }
      console.log(callback)
      console.log('CALLBACK')
      callback();
    }
  });
};

Photo.find = function(id){
  for (var i = 0; i < Photo.all.length; i++) {
    if (Photo.all[i].id == id){
      return Photo.all[i]
    }
  }
  return undefined;
}

Photo.prototype.save = function (callback) {
  var that = this;
  if (Photo.find(this.id) === undefined){
    this.create(callback);
  } else{
    this.update(callback);
  }
};

Photo.prototype.printthis = function(callback){
  console.log(this)
}

Photo.prototype.create = function (callback) {
  var that = this;
  $.ajax({
    url: Photo.baseUrl + ".json",
    type: "POST",
    data: {photo: {photopath: this.photopath}},
    success: function(response){
      that.id = response.id
      that.user_id = response.user_id
      that.photopath = response.photopath
      Photo.all.push(that);
      console.log("callback")
      console.log(callback)
      callback();
    }
  });
};

Photo.prototype.fetch = function(photo_id, callback){
  var that = this;
  $.ajax({
    url: Photo.baseUrl + '/' + photo_id + ".json",
    type: "GET",
    data: JSON.stringify(this),
    success: function(response){
      callback();
    }
  });
};

Photo.prototype.update = function (callback) {
  var that = this;
  $.ajax({
    url: Photo.baseUrl + '/' + photo_id + ".json",
    type: "PUT",
    data: JSON.stringify(this),
    success: function(response){
      callback();
    }
  });
};

Photo.prototype.destroy = function (callback) {
  var that = this;
  $.ajax({
    url: Photo.baseUrl + '/' + this.id + ".json",
    type: "DELETE",
    success: function(response){
      callback();
    }
  });
};