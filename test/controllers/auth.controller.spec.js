var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require("chai").expect;
var should = require('chai').should();
var chai = require("chai");



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
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        })
        
        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
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