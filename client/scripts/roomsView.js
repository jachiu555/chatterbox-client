var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Parse.readAll((data) => {
    //   for (var i = 0; i < data.results.length; i++){
    //     if($('select').find("option:contains('" + data.results[i].roomname + "')").length > 0){
    //       continue;   // if the length inside the select element is 0, aka the room list, continue skips to next room name instead of adding a repeated room name
    //     } else {
    //     RoomsView.$select.append('<option value="'+ i +'">'+ data.results[i].roomname + '</option>'); // add the room name (filters out the data with repeating room names)
    //     }
    //   }
    // });
    Rooms.add();
  },

  renderRoom: function() {
    RoomsView.$select.append('<option></option>');
  }
};
