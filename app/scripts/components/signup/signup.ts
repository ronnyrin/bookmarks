/**
 * Created by ronnyr on 15/02/2016.
 */


class SignUpController {

    constructor(private $state) {

    }

    register(user) {
        this.$state.go('list');
        return true;
    }
}

angular.module('projectsApp')
    .controller('signUpController', SignUpController)
    .component('signup', {
        controller: 'signUpController',
        templateUrl: 'scripts/components/signup/signup.html',
    });
