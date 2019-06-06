
//set defaults on install
chrome.runtime.onInstalled.addListener(function() 
{	
	var siteList = ['cat', 'example2', 'example3'];
	
	// set the default added search
	chrome.storage.sync.set({siteTitle: "titleText"}, function() 
	{
	console.log("title set");	
	});
  
	chrome.storage.sync.set({siteURLText: "URLText"}, function() 
	{
		console.log("url text set");
	});
  
	chrome.storage.sync.set({siteDescription: "Description"}, function() 
	{
		console.log("description set");
	});
  
	chrome.storage.sync.set({siteURL: "URL"}, function() 
	{
		console.log("url set");
	});
	
	chrome.storage.sync.set({siteSearchTerms: siteList}, function() 
	{
		console.log("search terms set");
	});
	
		
	// set chase defaults
	chrome.storage.sync.set({chaseName1: "Yale Checking"}, function() 
	{
	console.log("chaseName1 set");	
	});
	
	chrome.storage.sync.set({chaseName2: "Yale Checking"}, function() 
	{
	console.log("chaseName2 set");	
	});
	
	chrome.storage.sync.set({chaseName3: "Yale Savings"}, function() 
	{
	console.log("chaseName3 set");	
	});
	
	chrome.storage.sync.set({chaseAccount1: "7890"}, function() 
	{
	console.log("chaseAccount1 set");	
	});
	
	chrome.storage.sync.set({chaseAccount2: "9962"}, function() 
	{
	console.log("chaseAccount2 set");	
	});
	
	chrome.storage.sync.set({chaseAccount3: "5678"}, function() 
	{
	console.log("chaseAccount3 set");	
	});
	
	chrome.storage.sync.set({chasePresent1: "$25,000.00"}, function() 
	{
	console.log("chasePresent1 set");	
	});
	
	chrome.storage.sync.set({chasePresent2: "$17,500.00"}, function() 
	{
	console.log("chasePresent2 set");	
	});
	
	chrome.storage.sync.set({chasePresent3: "$14,700.56"}, function() 
	{
	console.log("chasePresent3 set");	
	});
	
	chrome.storage.sync.set({chaseAvailable1: "$25,000.00"}, function() 
	{
	console.log("cchaseAvailable1 set");	
	});
	
	chrome.storage.sync.set({chaseAvailable2: "$17,500.00"}, function() 
	{
	console.log("chaseAvailable12 set");	
	});
	
	chrome.storage.sync.set({chaseAvailable3: "$14,700.56"}, function() 
	{
	console.log("chaseAvailable3 set");	
	});
	
	console.log("installed/updated");
	console.log("This message will only appear when you install or update the plugin");
});
	




 


  
