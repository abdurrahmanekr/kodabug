import WildEmitter from 'wildemitter';

function _CC() {} // WildEmitter function

WildEmitter.mixin(_CC);


if (typeof GLOBALS === 'undefined') {
	global.GLOBALS = {
		/* kullanıcının tüm bilgileri yer alır*/
		user: undefined,
		/* view güncellemeleri için kullanılır */
		promise: {
			view: new _CC()
		}
	}
}

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
