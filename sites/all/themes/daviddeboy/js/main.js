jQuery( function( ) {

    // Project Image Viewer
    jQuery( '.node-project.view-mode-full .field-name-field-images' ).each( function(i) {
        $main = jQuery( '<img />' ).addClass( 'main-image' ).attr( 'id', 'main-image-' + i );
        $images = jQuery( this ).find( 'img' ).css( 'cursor', 'pointer' ).data( 'main', $main ).click( function() {
            jQuery( this ).data( 'main' ).attr( 'src', jQuery( this ).attr( 'src' ) );
        } );
        $main.attr( 'src', jQuery( $images[0] ).attr( 'src' ) );
        jQuery( this ).prepend( $main );
    } );

} );
