<h1>Laravel Fast Image Upload via AJAX with Validation</h1>
<p>This project's purpose is to show how to upload image in the best way and efficient way possible with validation of image extension, size and dimensions.</p>
<p>User first registers, logs in and is redirected to the home page. On home page resides an upload image form that isn't submitted at all. Instead jQuery catches onchange event and validates the image, displaying any errors (if there are). If image passes validation it is converted to base64 string and sent to uploadImage() function which sends the base64 string to back end Laravel script.</p>
<p>On the back end, Laravel accepts the request and using Intervention Image library decodes the base64 for converting it to an image and storing it in public/img folder.</p>
<p>This project is designed to show beginners that are just strating out with Laravel how to upload an image.</p>
<p>If you want step by step tutorial visit an <a href="http://markosblog.com/fast-image-upload-with-laravel-and-axios/" target="_blank">article</a> on my blog.</p>
