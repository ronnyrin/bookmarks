/**
 * Created by ronnyr on 15/02/2016.
 */
interface IUser {
    email:string;
    password:string;
}

class SignUpController {

    user:IUser;

    constructor(private $state) {

    }

    register(isValid:boolean):boolean {
        if (!isValid) {
            return false;
        }

        console.log(this.user);
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
