$(document).on('pageshow', '#pageId', function(){
	$(document).scannerDetection({
		avgTimeByChar: 40,
		onComplete: function(barcode, qty){ ... },
		onError: function(string){alert('Error ' + string);}
	});
});

$(document).on('pagehide', '#pageId', function(){
	$(document).scannerDetection(false);
});
