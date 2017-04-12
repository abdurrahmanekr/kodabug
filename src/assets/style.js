import startCss from './css/start-css';
import loginCss from './css/login-css';
import mainCss from './css/main-css';
import registerCss from './css/register-css';
import contributionsCss from './css/contributions-css';
import sendGameCss from './css/send-game-css';
import mainTabCss from './css/main-tab-css';
import globalTabCss from './css/global-tab-css';


export default function getCss(page) {
	switch (page) {
		case 'start':
			return startCss();
		case 'login':
			return loginCss();
		case 'main':
			return mainCss();
		case 'register':
			return registerCss();
		case 'send-game':
			return sendGameCss();
		case 'contributions':
			return contributionsCss();
		case 'main-tab':
			return mainTabCss();
		case 'global-tab':
			return globalTabCss();
		default:
			return {
				body: {
					overflow: 'hidden'
				}
			}
	}
	return null;
}
