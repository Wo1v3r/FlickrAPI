$(document).ready(function() {


 $("form").submit(function(ev) {
      ev.preventDefault();
    
  var $searchfield =  $("#search");
   
   var $submitbutton = $("#submit");
   
  $searchfield.prop("disabled", true);
   $submitbutton.prop("disabled", true).val("searching....");
                   
                   
    //Requesting from the public api, can use with api key instead if wanted
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
   
   
   
   
   var search = $searchfield.val();
   
    var flickrOptions = {
      tags: search ,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      
       $searchfield.prop("disabled", false);
       $searchfield.val("");
       $submitbutton.prop("disabled", false).val("Submit");
      
      console.log(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos)
    

  }); // end submit

}); // end ready