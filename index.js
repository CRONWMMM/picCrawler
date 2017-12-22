

// =====================================================================【邻居的耳朵】



const fs = require('fs');
const path = require('path');
const async = require('async');
const config = require('./config/config');
const imgArr = require('./utils/getUrlArr').imgArr;

imgArr.then((res) => {
	console.log(res.length);
}).then((res) => {

}).catch((err) => {
	console.log(err);
});
