
$(document).ready(function(){
	function buildErrorMessage(e) {
		return e.line !== undefined && e.column !== undefined
	? "Line " + e.line + ", column " + e.column + ": " + e.message
	: e.message;
	};
	
	var timer;
	function do_parsing(){
		function parse(){
			var parsed;
			try{
				$("#message").text("Parsing...");
				var val = $("#input").val();
				if(val){
					parsed =  grammar.parse(val);
//					$("#html_output").jsml(parsed);
				}
				$("#message").text("Parsed!");
			}catch(e)
			{
				$("#message").text(buildErrorMessage(e));
			}
		}
		if(timer)
			clearTimeout(timer);
		timer = setTimeout(parse, 1000);
		$("#message").text("Typing...");
	}


	$("#input").keyup(do_parsing)
		.focusout(do_parsing);
    
$.getJSON( "http://www.insidegfw.com:5984")
.fail(function( jqxhr, textStatus, error ) {
var err = textStatus + ", " + error;
console.log( "Request Failed: " + err );
});

    
});

function get_file_list(){

    $.ajax({
        type:"GET",
        url:"http://www.insidegfw.com:5984",
        success: function(data){
            $("#nav-file").text(data.toString());
        }
    });
    
}
