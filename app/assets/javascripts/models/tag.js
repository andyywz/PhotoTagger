var Tag = function(tag_attrs){
  this.id = tag_attrs.id;
  this.photo_id = tag_attrs.photo_id;
  this.user_id = tag_attrs.user_id;
  this.x_coord = tag_attrs.x_coord;
  this.y_coord = tag_attrs.y_coord;
}

Tag.all = []
Tag.baseUrl = '/tags'

Tag.fetch = function(){
  Tag.all = []
  $.ajax({
    url: Tag.baseUrl + ".json",
    type: "GET",
    data: {},
    success: function(response){
      for (var i = 0; i < response.length; i++) {
        var tag = response[i];
        Tag.all.push(new Tag(tag));
      }
    }
  });
};

Tag.find = function(id){
  for (var i = 0; i < Tag.all.length; i++) {
    if (Tag.all[i].id == id){
      return Tag.all[i];
    }
  }
  return undefined;
}

Tag.prototype.save = function (callback) {
  if (Tag.find(this.id) === undefined){
    this.create(callback);
  } else{
    this.update(callback);
  }
};

Tag.prototype.create = function (callback) {
  var that = this;
  $.ajax({
    url: this.baseUrl + ".json",
    type: "POST",
    data: JSON.stringify(this),
    success: function(response){
      Tag.all.push(that);
      callback();
    }
  });
};

Tag.prototype.fetch = function(tag_id, callback){
  var that = this;
  $.ajax({
    url: this.baseUrl + '/' + tag_id + ".json",
    type: "GET",
    data: JSON.stringify(this),
    success: function(response){
      this.photo_id = tag_attrs.photo_id;
      this.user_id = tag_attrs.user_id;
      this.x_coord = tag_attrs.x_coord;
      this.y_coord = tag_attrs.y_coord;
      callback();
    }
  });
};

Tag.prototype.update = function (callback) {
  var that = this;
  $.ajax({
    url: this.baseUrl + '/' + tag_id + ".json",
    type: "PUT",
    data: JSON.stringify(this),
    success: function(response){
      callback();
    }
  });
};

Tag.prototype.destroy = function (callback) {
  var that = this;
  $.ajax({
    url: this.baseUrl + '/' + this.id + ".json",
    type: "DELETE",
    success: function(response){
      callback();
    }
  });
};
