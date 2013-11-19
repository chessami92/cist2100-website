$( "#header" ).load( "header.html" ).addClass( "header" );
$( "#sidebar" ).load( "ad.html" ).addClass( "content" );
$( "#footer" ).html( "Interactive Game Studio, &copy; " + (new Date).getFullYear() ).addClass( "content small centered" );
