var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //MessagesView.$chats.on('', MessagesView.renderMessage);
  },

  renderMessage: function(message) {
    message = MessageView.render;
    MessagesView.$chats.append(message);
  }

};