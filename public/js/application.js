$(document).ready(function() {



  $('#create-post').submit(function(e) {
    e.preventDefault();
    var form_data = $(this).serialize();

    $.post('/created', form_data).done(function(data) {
      history.pushState(data, "Thank you", "/edit/" + data.secret_url);
      $('h1').text("Thank you for creating a post!");
      $('#formy-thing').text("Your secret url is: http://localhost:9292/edit/" + data.secret_url + "\n\n\nGo to the above secret url to edit.");
    });
  });
});



// $(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them

//   var Callbacks = {
//     success: function(data) {
//       console.log("success! " + data);
//     },

//     failure: function(data) {
//       console.log("error! " + data);
//     }
//   }


// $('form').submit(function(e) {
//   e.preventDefault();
//   var form_data = $(this).serialize();
//   console.log(form_data);
//   $.post('/grandma', form_data).done(function(data) {
//      console.log("success! " + data);
//   });
//   // function(a,b,c) {
//   //   console.log(a+","+b+","+c);
//   //   $("#grandma_says").html(returned_from_server)
//   //   console.log(a);
//   // });
// });
//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });
