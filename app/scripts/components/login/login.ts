/**
 * Created by ronnyr on 15/02/2016.
 */

class loginController {

    constructor(private $state) {

    }

    login(user) {
        this.$state.go('list');
        return true;
    }
}

angular.module('projectsApp')
    .controller('loginController', loginController)
    .component('login', {
        controller: 'loginController',
        templateUrl: 'scripts/components/login/login.html',
    });
