var User = function(user_attrs){
  this.id = user_attrs.id;
  this.name = user_attrs.name;
  this.password_digest = user_attrs.password_digest;
  this.session_token = user_attrs.session_token;
}

User.all = []
User.baseUrl = '/users'

User.fetch = function(){
  User.all = []
  $.ajax({
    url: User.baseUrl + ".json",
    type: "GET",
    success: function(response){
      for (var i = 0; i < response.length; i++) {
        var user = response[i]
        User.all.push(new User(user))
      }
    }
  });
};

User.find = function(id){
  for (var i = 0; i < User.all.length; i++) {
    if (User.all[i].id == id){
      return User.all[i]
    }
  }
  return undefined;
}

User.prototype.save = function (callback) {
  if (User.find(this.id) === undefined){
    this.create(callback);
  } else{
    this.update(callback);
  }
};

User.prototype.create = function (callback) {
  var that = this;
  $.ajax({
    url: this.baseUrl + ".json",
    type: "POST",
    data: JSON.stringify(this),
    success: function(response){
      User.all.push(that);
      callback();
    }
  });
};

User.prototype.fetch = function(user_id, callback){
  var that = this;
  $.ajax({
    url: this.baseUrl + '/' + user_id + ".json",
    type: "GET",
    data: JSON.stringify(this),
    success: function(response){
      callback();
    }
  });
};

User.prototype.update = function (callback) {
  var that = this;
  $.ajax({
    url: this.baseUrl + '/' + user_id + ".json",
    type: "PUT",
    data: JSON.stringify(this),
    success: function(response){
      callback();
    }
  });
};

User.prototype.destroy = function (callback) {
  var that = this;
  $.ajax({
    url: this.baseUrl + '/' + this.id + ".json",
    type: "DELETE",
    success: function(response){
      callback();
    }
  });
};
