
const axios = require('axios');
const cheerio = require('cheerio');

async function getImgUrl (url) {

	try {

		let res = await axios.get(url);
		let content = res.data;
		let $ = cheerio.load(content);
		let $list = $('#main a img');
		let data = (($, $list) => {
			let arr = [];
			$list.each(function (i, item) {
				arr.push($list.eq(i).prop('src'));
			});
			return arr;
		})($, $list);
		return data;
	} catch (e) {
		console.log(e);
		return [];
	}

}

exports.getImgUrl = getImgUrl;