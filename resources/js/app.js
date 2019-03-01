require('./bootstrap');

window.validateImage = function() {
  var file = $('#file')[0].files[0];
  if ((/\.(png|jpeg|jpg|gif)$/i).test(file.name)) {
    if (Math.round(file.size / (1024*1024)) < 2) {
      var fileReader = new FileReader();
      fileReader.onload = () => {
        var image = new Image();
        image.onload = () => {
          if (image.width > 400 && image.height > 400) {
            $('.image').css('background-image', `url(${fileReader.result})`);
            uploadImage(fileReader.result);
          } else {
            displayMessage('Image has to be atleast 400x400', 'error');
          }
        };
        image.src = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    } else {
      displayMessage('Image has to be less the 2MB','error');
    }
  } else {
    displayMessage('Invalid image extension.','error');
  }
  $('#file').val('');
}

window.uploadImage = function(base64) {
  console.log();

  $('#loader').css('display', 'block');

  axios.post('/image', {base64: base64})
    .then(response => {
      var data = response.data;

      if (data.success) {
        displayMessage('Your profile image was updated.', 'success');
      }

      $('#loader').css('display', 'none');
    });

}

window.displayMessage = function(message, status) {
  var messageContainer = $('#message');
  messageContainer
    .html(message)
    .attr('class', '')
    .addClass(status)
    .animate({left: '0px'});
  setTimeout(function() {
    messageContainer.animate({left: '-320px'})
  }, 3000);
};
