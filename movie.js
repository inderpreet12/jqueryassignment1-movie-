$(function(){

$("#btn").click(function(){
var a=$("#text").val();
$.getJSON("http://www.omdbapi.com/?s="+a,function(obj)
{
	console.log(obj.totalResults);
$.each(obj["Search"],function(key,value)

{	
	//image of the movie
     $("#myDiv").append("<ul><li><img src="+value.Poster+"height='300px'/></li></ul>");
     //title of the movie 
	$("#myDiv").append("<h1><ul><li>"+value.Title+"</li></ul></h1>");
	//year
	$("#myDiv").append("<h1><ul><li>"+value.Year+"</li></ul><h1>");
   //type
    
     
    $("#myDiv").append("<h1><ul><li>"+value.Type+"</li></ul></h1>");
   
	
});
$("#btn").prop("disabled",true);

// $("#myDiv").html("<ul><li>"+value.Poster+"</li></ul>");

});

});
});