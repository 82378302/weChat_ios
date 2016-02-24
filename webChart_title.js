/* 
 * 原生JS解决办法;
*/

function webChart(data){ 
   var body = document.getElementsByTagName('body')[0];
   document.title = data.title 
   var iframe = document.createElement("iframe");
       iframe.setAttribute("src", "/favicon.ico");
       iframe.addEventListener('load', function() {
       setTimeout(function() {
          iframe.removeEventListener('load');
          document.body.removeChild(iframe);
       }, 0);
      });
      document.body.appendChild(iframe);
}


/*
 * jquery解决办法;
 */  
function webChart(data){ 
    var $body = $('body'); 
    document.title = data.title;
    var $iframe = $('<iframe src="/favicon.ico"></iframe>');
    $iframe.on('load',function() {
        setTimeout(function() {
          $iframe.off('load').remove();
        }, 0);
    }).appendTo($body);
}
