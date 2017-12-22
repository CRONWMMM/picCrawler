
const axios = require('axios');
const config = require('../config/config');
const baseUrl = config.baseUrl;
const queryString = config.queryString;
const pageNum = 10;


let urlArr = ((baseUrl, queryString, pageNum) => {
	let arr = [];
	for (let i = 1; i < pageNum+1; i++) {
		let url = `${baseUrl}?${queryString}=${i}`;
		arr.push(url);
	}
	return arr;
})(baseUrl, queryString, pageNum);


let imgArr = (async (arr) => {

	let finalArr = [];
	let getImgUrl = require('./getImgUrl').getImgUrl;

	for (let i = 0; i < arr.length; i++) {
		try {
			let dataArr = await getImgUrl(arr[i]);
			finalArr.push(...dataArr);
			console.log(`生成图片列表------${i/arr.length*100}%`);
		} catch (e) {
			console.log(e);
		}
	}

	return finalArr;
})(urlArr);


exports.imgArr = imgArr;