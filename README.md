FullScreenImage
===============

FullScreenImage allows a MooTools/Javascript developer to show images as _true_ full screen by using a small Flash applet. The developer doesn't need any knowledge of Flash/ActionScript.

![Screenshot](http://github.com/michalc/FullScreenImage/raw/master/Images/FullScreenImage.png)


How to use
----------

### Initialisation

A "button" must be chosen on the page to act as the toggle.

	var panel = new FullScreenImage($('fullScreenButton'), {swf:'swf/FullScreenImage.swf'});


### Showing an Image

To show an image, use FullScreenImage::show

	panel.show("images/myImage.jpg");
	
*Note* this only shows the image if already in full screen mode. Otherwise the image is loaded, and will be shown next time full screen mode is activated


### Toggling Between Full Screen and Normal Mode

* To enter full screen mode, the user clicks the button
* To exit full screen mode, the user presses Esc (as is shown on screen when going to full screen mode)

*Note* I wasn't able to get full screen mode working in response to Javascript events (e.g. a mouse click on a HTML element). I suspect this is a security precaution.