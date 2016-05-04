$(document).ready(function(){
	var display=$('#display');
	var count="";

	var testNumLength = function(number) {
        if (number.length > 17) {
            display.text(display.text().substr(display.text().length-17,17));
            // if (number.length > 15) {
            //     number = "";
            //     display.text("Err");
            // }
        } 
    };
    
	// Clear Display
	$('.clear').click(function(){
		$('#display').empty();
		count="";
	});

	// Numbers
	$("#zero").click(function(){
		$('#display').text($('#display').text() + 0);
		count+="x";
		testNumLength(count);
    });
	$("#one").click(function(){
		$('#display').text($('#display').text() + 1);
		count+="x";
		testNumLength(count);
    });
    $("#two").click(function(){
		$('#display').text($('#display').text() + 2);
		count+="x";
		testNumLength(count);
    });
    $("#three").click(function(){
		$('#display').text($('#display').text() + 3);
		count+="x";
		testNumLength(count);
    });
    $("#four").click(function(){
		$('#display').text($('#display').text() + 4);
		count+="x";
		testNumLength(count);
    });
    $("#five").click(function(){
		$('#display').text($('#display').text() + 5);
		count+="x";
		testNumLength(count);
    });
    $("#six").click(function(){
		$('#display').text($('#display').text() + 6);
		count+="x";
		testNumLength(count);
    });
    $("#seven").click(function(){
		$('#display').text($('#display').text() + 7);
		count+="x";
		testNumLength(count);
    });
    $("#eight").click(function(){
		$('#display').text($('#display').text() + 8);
		count+="x";
		testNumLength(count);
    });
    $("#nine").click(function(){
		$('#display').text($('#display').text() + 9);
		count+="x";
		testNumLength(count);
    });

	// Operations
	$('#add').click(function() {
  		$('#display').text($('#display').text() + '+');
  		count+="x";
  		testNumLength(count);
	});
	$('#subtract').click(function() {
  		$('#display').text($('#display').text() + '-');
  		count+="x";
  		testNumLength(count);
	});
	$('#multiply').click(function() {
  		$('#display').text($('#display').text() + '*');
  		count+="x";
  		testNumLength(count);
	});
	$('#divide').click(function() {
  		$('#display').text($('#display').text() + '/');
  		count+="x";
  		testNumLength(count);
	});
	$('#decimal').click(function() {
  		$('#display').text($('#display').text() + '.');
  		count+="x";
  		testNumLength(count);
	});
	$('#equal').click(function() {
  		$('#display').text(eval($('#display').text()));
	});
});