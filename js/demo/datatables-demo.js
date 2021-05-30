function reRenderTable(){
  if($(window).width() <= 992){
    let totalColumns=$('table thead th').length;
    

    let column_name=[];
    $('table thead th').each(function(){
      column_name.push($(this).text());
    });

    let i=0;
    $('table tbody tr td').each(function(){
      let firstP = $(this).find("p").first();
      let lastP = $(this).find("p").last();
      if(firstP.text()==column_name[i]){
        firstP.remove();
      }
      if(lastP.length!=0){
        lastP.contents().unwrap();
      }
      $(this).wrapInner("<p></p>");
      $(this).prepend("<p>"+column_name[i]+"</p>");
      i++;
      if(i==totalColumns){
        i=0;
      }
    })
  }
}
$(document).ready(function() {
  $('#dataTable')
        .on( 'search.dt', function () { reRenderTable() } )
        .on( 'page.dt',   function () { reRenderTable() } )
        .DataTable();  
});
