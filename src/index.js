var monitor = {
	ua: window.navigator.userAgent,
	/**
	 * 获取网络类型
	 * ios7以下 : WIFI/NONWIFI
	 * iso7或以上： WIFI 2G 3G+
	 * android : uninet uniwap 3gwap 3gnet cmwap cmnet ctwap ctnet LTE WIFI    (其中 LTE代表4g)
	 * @return {[string]} wifi 2g 2g+ 3g+ other
	 */
	getNetworkType: function() {
		if (!/NetType/i.test(this.ua)) { //UA中没有NetType字段
			return "other";
		}
		if (/(2g)|(cmwap)|(cmnet)|(uninet)|(uniwap)|(ctwap)|(ctnet)/i.test(this.ua)) { //2G网络
			return "2g";
		}
		if (/(3g)|(LTE)/i.test(this.ua)) { //3G+
			return "3gu";
		}
		if (/NONWIFI/i.test(this.ua)) { //非wifi 2g+
			return "2gu";
		}
		if (/WIFI/i.test(this.ua)) { //wifi
			return "wifi";
		}
		return "other";
	},
	/**
	 * 获取浏览器版本
	 * @return {[string]} [IE6 IE7 IE8 IE9 IE10 chrome firefox opera safari other]
	 */
	getBrowser: function() {
		if (/MicroMessenger/i.test(this.ua)) {
			return "wechat";
		}
		if (/firefox/i.test(this.ua)) {
			return "firefox";
		}
		if (/chrome/i.test(this.ua)) {
			return "chrome";
		}
		if (/opera/i.test(this.ua)) {
			return "opera";
		}
		if (/safari/i.test(this.ua)) {
			return "safari";
		}
		if (/msie 6/i.test(this.ua)) {
			return "IE6";
		}
		if (/msie 7/i.test(this.ua)) {
			return "IE7";
		}
		if (/msie 8/i.test(this.ua)) {
			return "IE8";
		}
		if (/msie 9/i.test(this.ua)) {
			return "IE9";
		}
		if (/msie 10/i.test(this.ua)) {
			return "IE10";
		}
		return "other";
	},
	/**
	 * 获取操作系统
	 * @return {[type]} [description]
	 */
	getOs: function() {
		if (/Windows Phone/i.test(this.ua)) {
			return "wp";
		}
		if (/iPhone OS/i.test(this.ua)) {
			return "ios";
		}
		if (/Android 2/i.test(this.ua)) {
			return "android2";
		}
		if (/Android 3/i.test(this.ua)) {
			return "android3";
		}
		if (/Android/i.test(this.ua)) {
			var v = this.ua.match(/android (\d)/i)[1];
			if (v >= 4) {
				return "android4u";
			} else {
				return "other";
			}
		}
		return "other";
	}
};
