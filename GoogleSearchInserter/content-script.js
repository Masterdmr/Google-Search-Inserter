
//get the current site - must be outside of funtions as is used globally
var currentSite = window.location.toString()


//get the list of search terms to check
 chrome.storage.sync.get(['siteSearchTerms'], function(dataSites) 
{
	//cycle through each search term in the array checking
	dataSites.siteSearchTerms.forEach(function(element)
	{
		
		//check if the current site is a google search and if the search matches one of the defined terms in dataSites
		if(currentSite.includes(element.trim()) && currentSite.includes("google"))
		{
			// Get the element we want to clone"
			var itm = document.querySelector("div.g");
			// Copy the element
			// notes on clone
			// true - Clone the node, its attributes, and its descendants
			// false - Default. Clone only the node and its attributes
			var cln = itm.cloneNode(true);
			//console.log(cln);

// modify the text and stuff 
// for refrence - (elementType.ID)
			chrome.storage.sync.get(['siteTitle'], function(dataTitle) 
				{
					document.querySelector("h3.LC20lb").innerHTML = dataTitle.siteTitle;
				})
				
				chrome.storage.sync.get(['siteURLText'], function(dataURLText) 
				{
					document.querySelector("cite.iUh30").innerHTML = dataURLText.siteURLText;
				})
				
				chrome.storage.sync.get(['siteDescription'], function(siteDescription) 
				{
					document.querySelector("span.st").innerHTML = siteDescription.siteDescription;
				})
				
				chrome.storage.sync.get(['siteURL'], function(dataURL) 
				{
					document.querySelector("div.r > a").href = dataURL.siteURL;
					document.querySelector("div.r > a").href = ("https://" + dataURL.siteURL);
				})

			document.querySelector("div.r > a").ping = "";
			document.querySelector("#rso > div:nth-child(1) > div > div > div > div.s > div > div").innerHTML = "";
			
			// Put the copy before the original - must be last, and yes it must be the after method to put it on top"
			document.querySelector("div.g").after(cln);
		}

	});
})

// modify the chase bank demo	
if(currentSite.includes("chase") && currentSite.includes("demos"))
{
		

// Wait for the chase site to load or it doesnt work
(async() => {
	
  while(!document.querySelector("#depositAccountLink_3797916")) 
	{
		await new Promise(r => setTimeout(r, 500));
	}

//set the details of each element of the table  
chrome.storage.sync.get(['chaseName1'], function(datachaseName1) 
	{
		chrome.storage.sync.get(['chaseAccount1'], function(datachaseAccount1) 
		{		
			var temp = datachaseName1.chaseName1 + " ..." + datachaseAccount1.chaseAccount1
			document.querySelector("#depositAccountLink_3797916").innerHTML = temp
		
		})
		
	})
	
	chrome.storage.sync.get(['chaseName2'], function(datachaseName2) 
	{
		chrome.storage.sync.get(['chaseAccount2'], function(datachaseAccount2) 
		{		
			var temp = datachaseName2.chaseName2 + " ..." + datachaseAccount2.chaseAccount2
			document.querySelector("#depositAccountLink_3799962").innerHTML = temp
		
		})
		
	})
	
	chrome.storage.sync.get(['chaseName3'], function(datachaseName3) 
	{
		chrome.storage.sync.get(['chaseAccount3'], function(datachaseAccount3) 
		{		
			var temp = datachaseName3.chaseName3 + " ..." + datachaseAccount3.chaseAccount3
			document.querySelector("#depositAccountLink_3983468").innerHTML = temp
		
		})
		
	})
	
	chrome.storage.sync.get(['chasePresent1'], function(datachasePresent1) 
	{
		document.querySelector("#outer-dashboard-container > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(2)").innerHTML = datachasePresent1.chasePresent1
	})
	
	chrome.storage.sync.get(['chasePresent2'], function(datachasePresent2) 
	{
		document.querySelector("#outer-dashboard-container > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(2)").innerHTML = datachasePresent2.chasePresent2
	})
	
	chrome.storage.sync.get(['chasePresent3'], function(datachasePresent3) 
	{
		document.querySelector("#outer-dashboard-container > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(3) > td:nth-child(2)").innerHTML = datachasePresent3.chasePresent3
	})
	
	chrome.storage.sync.get(['chaseAvailable1'], function(datachaseAvailable1) 
	{
		document.querySelector("#outer-dashboard-container > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(3)").innerHTML = datachaseAvailable1.chaseAvailable1
	})
	
	chrome.storage.sync.get(['chaseAvailable2'], function(datachaseAvailable2) 
	{
		document.querySelector("#outer-dashboard-container > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(3)").innerHTML = datachaseAvailable2.chaseAvailable2
	})
	
	chrome.storage.sync.get(['chaseAvailable3'], function(datachaseAvailable3) 
	{
		document.querySelector("#outer-dashboard-container > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(3) > td:nth-child(3)").innerHTML = datachaseAvailable3.chaseAvailable3
	})
	
})();

}

	

