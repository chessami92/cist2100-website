$( "#header" ).load( "header.html" ).addClass( "header" );
$( "#main" ).addClass( "content left" );
$( "#content" ).addClass( "content" );
$( "#sidebar" ).load( "ad.html" ).addClass( "content right" );
$( "#footer" ).html( "Interactive Game Studio, &copy;" + (new Date).getFullYear() ).addClass( "content small centered" );
