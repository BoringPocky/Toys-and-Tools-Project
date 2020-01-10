
  //actual content
  $grid = $('.grid').isotope({
    itemsSelector: '.grid-item',
    layoutMode: 'fitRows'
  });



  $('.tea-button').click(function(){
    $grid.isotope({filter: '.tea'})
  });

  $('.milktea-button').click(function(){
    $grid.isotope({filter: '.milktea'})
  });

  $('.flavoured-button').click(function(){
    $grid.isotope({filter: '.flavoured'})
  });

  $('.toppings-button').click(function(){
    $grid.isotope({filter: '.toppings'})
  });
  
  $('.all-button').click(function(){
    $grid.isotope({filter: '*'})
  // * = all
  });