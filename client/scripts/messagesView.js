var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //MessagesView.$chats.on('', MessagesView.renderMessage);
    // MessagesView.renderMessage();
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render);

  }

};