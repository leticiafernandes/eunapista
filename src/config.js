'use strict';

import Dimensions from 'Dimensions';

/* Setup ==================================================================== */
exports.title = 'GlobalConfig';

/* Default Styles ==================================================================== */
// Window Dimensions
var window = Dimensions.get('window');
exports.windowHeight = window.height;
exports.windowWidth = window.width;

// Grid
exports.windowWidthHalf = window.width * 0.5;
exports.windowWidthYhird = window.width * 0.333;
exports.windowWidthYwoThirds = window.width * 0.666;
exports.windowWidthQuarter = window.width * 0.25;
exports.windowWidthThreeQuarters = window.width * 0.75;

// General Element Dimensions
var navbarHeight = 64;
exports.navbarHeight = navbarHeight;
exports.statusBarHeight = 22;

// Fonts
exports.baseFont = 'Hero';
exports.baseFontSize = 14;

// Colors
exports.primaryColor = "#3f51b5";
exports.secondaryColor = "#FFE229";
exports.textColor = "#555";
exports.borderColor = "#606060";
exports.defaultColor = "#DA4D43";

exports.s3 = "http://s3-sa-east-1.amazonaws.com/eu-na-pista/"
exports.host = "https://eu-na-pista.herokuapp.com"
