# Image-to-ASCII-using-p5.js

#### This is a simple JavaScript project that creates ASCII art from an image

Every pixel of an image has an RGB and an opacity (alpha) value. We can extract this information for each pixel and redraw the pixels with letters of the alphabet and some special characters.
The pattern 'Ñ@#W$9876543210?!abc;:+=-,._ ' is arranged in such a way they are in the decreasing order of their density (brightness when displayed on screen).
A character from this pattern is chosen to draw the corresponding pixel on the screen.

The code is implemented as follows:
1. Get pixel
2. Choose character from the pattern string according to its average RGB value
3. Print character
 
The final result:

<img src="output/result.png">
