// TODO: is this still needed?
function devNull() { if (chrome.runtime.lastError) {} }

function focusWin(tab) {
	if (tab && tab.id && tab.windowId) {
		chrome.tabs.update(tab.id, {selected: true});
		chrome.windows.update(tab.windowId, {focused: true});
	}
}

chrome.runtime.onMessage.addListener(function(incident, sender, sendResponse) {
	if(!sessionStorage.chp_map)
	{
		map(incident);
	}
	else
	{
		tabId = parseInt(sessionStorage.chp_map);
		chrome.tabs.get(tabId, function(tab) {
			devNull();
			if (typeof tab == 'undefined')
			{
				map(incident);
			}
			else
			{
				focusWin(tab);
				chrome.tabs.sendMessage(tabId, incident);
			}
		});
	}
});

var map = function(incident) {
	chrome.windows.create(
		{
		    url : chrome.extension.getURL("map.htm") +'#'+ JSON.stringify(incident),
		    type : 'popup',
		    width : 700,
		    height : 480,
		    left : ((screen.width/2) - 350),
		    top : ((screen.height/2) - 240)
		}, function(newWindow) {
			sessionStorage.chp_map = newWindow.tabs[0].id;
		}
	);

}