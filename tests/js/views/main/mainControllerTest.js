describe( 'Main Controller', function() {
	var scope;

	beforeEach( module( 'app' ) );
	beforeEach( inject(  function($controller, $rootScope) {
		scope = $rootScope.$new( true );
		$controller( 'mainController', {
			$scope: scope
		} );
	} ) );

	describe( 'On initialize', function() {
		it( 'check if scope test is equal teste.', function() {
			expect( scope.test ).toBe( 'teste' );
		});
	} );
} );
