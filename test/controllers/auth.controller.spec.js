var assert = require('assert');
var authController = require('../../controllers/auth.controller');



describe('AuthController', function () {

        beforeEach(function settingUpRoles() {
        console.log('running before each');
        authController.setRoles(['user']);
    });
   
    /*
      beforeEach('this function is erroring intentionally', function erroringFunction() {
        throw ({error: 'error'})
    });
    */
    
    describe.only('isAuthorized', function () {

        it('Should return false if not authorized', function () {
              authController.setRoles(['user']);
            assert.equal(false, authController.isAuthorized(['user'],'admin'));
        })
        
        it('Should return true if authorized', function () {
              authController.setRoles(['user', 'admin']);
        
            assert.equal(true, authController.isAuthorized('admin'));
        })
        
         it('should not allow a get if not authorized');
         it('should allow get if authorized');
       
    })
    
    describe.skip('isAuthorizedAsync', function () {

     it('Should return false if not authorized', function (done) {
       /*    if(true) { //something environmental
               this.skip()
           }else{
               authController.isAuthorizedAsync('admin',
                function (isAuth) {
                    assert.equal(false, isAuth);
                done();
                
                }); 
           } */
          authController.isAuthorizedAsync('admin',
                function (isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });


           

        })
       
    })
  

});