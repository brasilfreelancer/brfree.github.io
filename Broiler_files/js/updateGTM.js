var updateData = {"visitorLoginState":"No","visitorId":"2l5df42urnpjd2b4rhi2eeohl0","visitorSessionID":"2l5df42urnpjd2b4rhi2eeohl0","visitorType":"new customer","visitorLifetimeValue":0};

window.onload = function() {
	var eventObj = {
	"event": "tray.updateGTM"
	};
	updateData = jQuery.extend(updateData, {
		"siteSearchFrom": document.referrer
	});
	dataLayer.push(jQuery.extend(eventObj, updateData));

	console.info('[DataLayer] UpdateGTM executed.')
};