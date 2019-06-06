let page = document.getElementById('buttonDiv');
var optionsSiteList = "";

//construct the options list and populate the text boxes with saved values
constructOptions();

function constructOptions()
{
	chrome.storage.sync.get(['siteTitle'], function(dataTitle) 
	{
		document.getElementById('title').defaultValue = dataTitle.siteTitle
	})
	
	chrome.storage.sync.get(['siteURLText'], function(dataURLText) 
	{
		document.getElementById('urltext').defaultValue = dataURLText.siteURLText
	})
	
	chrome.storage.sync.get(['siteDescription'], function(siteDescription) 
	{
		document.getElementById('description').defaultValue = siteDescription.siteDescription
	})
	
	chrome.storage.sync.get(['siteURL'], function(dataURL) 
	{
		document.getElementById('url').defaultValue = dataURL.siteURL
	})
	
	chrome.storage.sync.get(['siteSearchTerms'], function(dataSearchTerms) 
	{
		document.getElementById('searchTerms').defaultValue = dataSearchTerms.siteSearchTerms
		dataSearchTerms.siteSearchTerms.forEach(function(element)
		{
		optionsSiteList = optionsSiteList + element + ", ";
		document.getElementById('searchTerms').defaultValue = dataSearchTerms.siteSearchTerms
		});
	})
	
	chrome.storage.sync.get(['chaseName1'], function(datachaseName1) 
	{
		document.getElementById('Bankingaccounts1').defaultValue = datachaseName1.chaseName1
	})
	
	chrome.storage.sync.get(['chaseName2'], function(datachaseName2) 
	{
		document.getElementById('Bankingaccounts2').defaultValue = datachaseName2.chaseName2
	})
	
	chrome.storage.sync.get(['chaseName3'], function(datachaseName3) 
	{
		document.getElementById('Bankingaccounts3').defaultValue = datachaseName3.chaseName3
	})
	
	chrome.storage.sync.get(['chaseAccount1'], function(datachaseAccount1) 
	{
		document.getElementById('Accountnumber1').defaultValue = datachaseAccount1.chaseAccount1
	})
	
	chrome.storage.sync.get(['chaseAccount2'], function(datachaseAccount2) 
	{
		document.getElementById('Accountnumber2').defaultValue = datachaseAccount2.chaseAccount2
	})
	
	chrome.storage.sync.get(['chaseAccount3'], function(datachaseAccount3) 
	{
		document.getElementById('Accountnumber3').defaultValue = datachaseAccount3.chaseAccount3
	})
	
	chrome.storage.sync.get(['chasePresent1'], function(datachasePresent1) 
	{
		document.getElementById('Presentbalance1').defaultValue = datachasePresent1.chasePresent1
	})
	
	chrome.storage.sync.get(['chasePresent2'], function(datachasePresent2) 
	{
		document.getElementById('Presentbalance2').defaultValue = datachasePresent2.chasePresent2
	})
	
	chrome.storage.sync.get(['chasePresent3'], function(datachasePresent3) 
	{
		document.getElementById('Presentbalance3').defaultValue = datachasePresent3.chasePresent3
	})
	
	chrome.storage.sync.get(['chaseAvailable1'], function(datachaseAvailable1) 
	{
		document.getElementById('Availablebalance1').defaultValue = datachaseAvailable1.chaseAvailable1
	})
	
	chrome.storage.sync.get(['chaseAvailable2'], function(datachaseAvailable2) 
	{
		document.getElementById('Availablebalance2').defaultValue = datachaseAvailable2.chaseAvailable2
	})
	
	chrome.storage.sync.get(['chaseAvailable3'], function(datachaseAvailable3) 
	{
		document.getElementById('Availablebalance3').defaultValue = datachaseAvailable3.chaseAvailable3
	})
}

// click the save button for the google search inserter
var clickSave = function ()
{
	
	chrome.storage.sync.set({siteTitle: document.getElementById('title').value}, function() 
	{
		console.log("title set to " + document.getElementById('title').value);				
	});
  
	chrome.storage.sync.set({siteURLText: document.getElementById('urltext').value}, function() 
	{
		console.log("url text set to " + document.getElementById('urltext').value);
	});
  
	chrome.storage.sync.set({siteDescription: document.getElementById('description').value}, function() 
	{
		console.log("description set to " + document.getElementById('description').value);
	});
  
	chrome.storage.sync.set({siteURL: document.getElementById('url').value}, function() 
	{
		console.log("url set to " + document.getElementById('url').value);
	});
	
	//split the seatch terms into an array so we can cycle through them later
	var tempSearchTermsString = document.getElementById('searchTerms').value;
	var tempSearchTermsArray = tempSearchTermsString.split(",");
		
	chrome.storage.sync.set({siteSearchTerms: tempSearchTermsArray}, function() 
	{
		console.log("site search terms set to " + tempSearchTermsArray);
	});
	
	console.log("Saved");
}

// click the save button for the chase bank modifier
var clickSaveChase = function ()
{
	
	chrome.storage.sync.set({chaseName1: document.getElementById('Bankingaccounts1').value}, function() 
	{
	console.log("chaseName1 set");	
	});
	
	chrome.storage.sync.set({chaseName2: document.getElementById('Bankingaccounts2').value}, function() 
	{
	console.log("chaseName2 set");	
	});
	
	chrome.storage.sync.set({chaseName3: document.getElementById('Bankingaccounts3').value}, function() 
	{
	console.log("chaseName3 set");	
	});
	
	chrome.storage.sync.set({chaseAccount1: document.getElementById('Accountnumber1').value}, function() 
	{
	console.log("chaseAccount1 set");	
	});
	
	chrome.storage.sync.set({chaseAccount2: document.getElementById('Accountnumber2').value}, function() 
	{
	console.log("chaseAccount2 set");	
	});
	
	chrome.storage.sync.set({chaseAccount3: document.getElementById('Accountnumber3').value}, function() 
	{
	console.log("chaseAccount3 set");	
	});
	
	chrome.storage.sync.set({chasePresent1: document.getElementById('Presentbalance1').value}, function() 
	{
	console.log("chasePresent1 set");	
	});
	
	chrome.storage.sync.set({chasePresent2: document.getElementById('Presentbalance2').value}, function() 
	{
	console.log("chasePresent2 set");	
	});
	
	chrome.storage.sync.set({chasePresent3: document.getElementById('Presentbalance3').value}, function() 
	{
	console.log("chasePresent3 set");	
	});
	
	chrome.storage.sync.set({chaseAvailable1:document.getElementById('Availablebalance1').value}, function() 
	{
	console.log("cchaseAvailable1 set");	
	});
	
	chrome.storage.sync.set({chaseAvailable2: document.getElementById('Availablebalance2').value}, function() 
	{
	console.log("chaseAvailable12 set");	
	});
	
	chrome.storage.sync.set({chaseAvailable3: document.getElementById('Availablebalance3').value}, function() 
	{
	console.log("chaseAvailable3 set");	
	});
	
	console.log("Saved");
}

//link the buttons to the save functions
document.getElementById('saveButton').onclick = clickSave;
document.getElementById('saveButtonChase').onclick = clickSaveChase;

