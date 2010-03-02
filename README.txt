sexyScale - jQuery Plugin to make add simple CSS scaling animations in one line of JS.
------------------
Drew Douglass - http://playground.creatingdrew.com


##########!!!NOTE!!!##########
This plugin REQUIRES that the following plugins be included first, in this order:
http://github.com/zachstronaut/jquery-animate-css-rotate-scale
http://github.com/zachstronaut/jquery-animate-css-rotate-scale

Usage 
------------------
@param original - The original scale value, defaults to 1.
@param scale - The value to scale to on hover, defaults to 1.05. 
@param duration - The duration in milliseconds of the animation, defaults to 500.

Markup
------------------
<script type="text/javascript" src="/assets/js/jquery.css-transform.js"></script>
<script type="text/javascript" src="/assets/js/jquery.animation-css-rotate-scale.js"></script>
<script type="text/javascript" src="/assets/js/jquery.sexyscale.js"></script>
<script type="text/javascript">
	//Scale the archives UL
	$(".link-list li").sexyScale();
</script>