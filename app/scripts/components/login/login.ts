/**
 * Created by ronnyr on 15/02/2016.
 */

class loginController {

    user:IUser;

    constructor(private $state) {

    }

    login(isValid:boolean):boolean {
        if (!isValid) {
            return false;
        }

        console.log(this.user);
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
