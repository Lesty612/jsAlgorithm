/**
 * [读取解析xml文件兼容浏览器]
 * @author Lesty
 * code-date 2015.10.24
 */

 var str = "<单词>storm</单词><音标>/ˈeniwʌn/</音标><音节划分>s-torm</音节划分><词性>n</词性><中译>暴风雨</中译><单词>storm</单词><音标>/ˈeniwʌn/</音标><音节划分>s-torm</音节划分><词性>n</词性><中译>暴风雨</中译><单词>storm</单词><音标>/ˈeniwʌn/</音标><音节划分>s-torm</音节划分><词性>n</词性><中译>暴风雨</中译>";

 loadXML("rows.xml");

 function loadXML(url) {
 	var xmlDoc = null;

 	if(window.ActiveXObject) {
 		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
 		xmlDoc.async = false;
 		xmlDoc.load(url);
 	} else if(navigator.userAgent.indexOf("Firefox") != -1) {
 		xmlDoc = document.implementation.createDocument('', '', null);
 		xmlDoc.load(url);
 	} else {
 		var xhr = new window.XMLHttpRequest();
 		xhr.open("get", url, false);
 		xhr.send(null);
 		if(xhr.readyState == 4) {
 			xmlDoc = xhr.responseXML.documentElement;
 			getDataChm(xmlDoc, url);
 		}
 	}

 	return xmlDoc;
 }

 /**
  * [getDataChm 读取xml数据Chrome版本]
  * @param  {String} url [文件路径]
  */
 function getDataChm(xmlDoc, url) {
 	var data = xmlDoc.getElementsByTagName("Row"),
 		word = '',
 		phonetic = '',
 		syllable = '',
 		wordPro = '',
 		translate = '',
 		len = data.length,
 		lineInfo = null;

 		for(var i = 0; i < len; i++) {
 			lineInfo = data[i].getElementsByTagName("Data");
 			word = lineInfo[1].childNodes[0].nodeValue;
 			phonetic = lineInfo[2].childNodes[0].nodeValue;
 			syllable = lineInfo[3].childNodes[0].nodeValue;
 			wordPro = lineInfo[4].childNodes[0].nodeValue;
 			translate = lineInfo[5].childNodes[0].nodeValue;

 			replaceStr(word, phonetic, syllable, wordPro, translate);
 		}

 		console.log(str);
 }

 function replaceStr(word, phonetic, syllable, wordPro, translate) {
 	var wPattern = /storm</i,
 	pPattern = /\/ˈeniwʌn\/</i,
 	sPattern = /s-torm</i,
 	wpPattern = />n</i,
 	tPattern = /暴风雨</i;
 	str = str.replace(wPattern, word + "<");
 	str = str.replace(pPattern, phonetic + "<");
 	str = str.replace(sPattern, syllable + "<");
 	str = str.replace(wpPattern, ">" + wordPro + "<");
 	str = str.replace(tPattern, translate + "<");
 }