//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Applies classes for creating grid or column styling.
//>>label: Grid Layouts (Columns)
//>>group: Widgets
//>>css.structure:../css/structure/jquery.mobile.grid.css
//>>css.theme: ../css/themes/default/jquery.mobile.theme.css

define( [ "jquery" ], function( jQuery ) {
//>>excludeEnd("jqmBuildExclude");
(function( $, undefined ) {

$.fn.grid = function( options ) {
	return this.each(function() {

		var $this = $( this ),
			o = $.extend({
				grid: null
			}, options ),
			$kids = $this.children(),
			gridCols = { solo:1, a:2, b:3, c:4, d:5, e:6, f:7 },
			grid = o.grid,
			iterator;

			if ( !grid ) {
				if ( $kids.length <= 7 ) {
					for ( var letter in gridCols ) {
						if ( gridCols[ letter ] === $kids.length ) {
							grid = letter;
						}
					}
				} else {
					grid = "a";
					$this.addClass( "ui-grid-duo" );
				}
			}
			iterator = gridCols[grid];

		$this.addClass( "ui-grid-" + grid );

		$kids.filter( ":nth-child(" + iterator + "n+1)" ).addClass( "ui-block-a" );

		if ( iterator > 1 ) {
			$kids.filter( ":nth-child(" + iterator + "n+2)" ).addClass( "ui-block-b" );
		}
		if ( iterator > 2 ) {
			$kids.filter( ":nth-child(" + iterator + "n+3)" ).addClass( "ui-block-c" );
		}
		if ( iterator > 3 ) {
			$kids.filter( ":nth-child(" + iterator + "n+4)" ).addClass( "ui-block-d" );
		}
		if ( iterator > 4 ) {
			$kids.filter( ":nth-child(" + iterator + "n+5)" ).addClass( "ui-block-e" );
		}
		if ( iterator > 5 ) {   
	            $kids.filter(':nth-child(' + iterator + 'n+6)').addClass('ui-block-f');
	        }
                if ( iterator > 6 ) {   
	            $kids.filter(':nth-child(' + iterator + 'n+7)').addClass('ui-block-g');
	        }
	});
};
})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");
