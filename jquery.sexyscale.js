/*
sexyScale 
@release date - March 2, 2010 
@author - Drew Douglass
@author url - http://playground.creatingdrew.com/
@license -  http://www.opensource.org/licenses/mit-license.php

@param original - The original scale value, defaults to 1.
@param scale - The value to scale to on hover, defaults to 1.05. 
@param duration - The duration in milliseconds of the animation, defaults to 500. 

##########!!!NOTE!!!##########
This plugin REQUIRES that the following plugins be included first, in this order:
http://github.com/zachstronaut/jquery-animate-css-rotate-scale
http://github.com/zachstronaut/jquery-animate-css-rotate-scale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function($){

	$.fn.sexyScale = function(settings){
	
		settings = $.extend({
			original: 1,
			scale: 1.05,
			duration: 500
		},settings);
		
		return this.each(function(){
		
			$(this).hover(function(){
				$(this).stop().animate({
					scale: settings.scale
				},settings.duration);
			}, function(){
				$(this).stop().animate({
					scale: settings.original
				},settings.duration);
			});
		
		});
	
	}

}(jQuery));