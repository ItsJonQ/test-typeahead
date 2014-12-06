( function( $, undefined ) { 'use strict';

  var options = {
    valueNames: [
      'title',
      'votes',
      'submit-date'
    ]
  };

  var featureList = new List( 'feature-list', options );


  var $body = $('body');
  var $search = $('#search');
  var $list = $('#the-list');
  var $create = $('#feature-create');

  var isListEmpty = function() {
    return $list.children().length > 0;
  }

  $search.focus();

  $create.hide();

  // $search.on('keyup', function( e ) {
  //   console.log( isListEmpty() );
  //   if( isListEmpty() ) {
  //     $create.hide();
  //   } else {
  //     $create.show();
  //   }
  // });


})( jQuery );