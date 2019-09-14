var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  renderRoom: function(roomName) {
    roomName = MessageView.render;
    RoomsView.$select.append(roomName);
  }

};
