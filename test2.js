$(document).ready(function() {
        var barcode="";
    $(document).keydown(function(e) {

        var code = (e.keyCode ? e.keyCode : e.which);
        if(code==13)// Enter key hit
        {
            alert(barcode);
        }
        else if(code==9)// Tab key hit
        {
            alert(barcode);
        }
        else
        {
            barcode=barcode+String.fromCharCode(code);
        }
    });

    });
