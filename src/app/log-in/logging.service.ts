import { User } from '../models/user.model';
import { Router } from '@angular/router';
export class LoggingService {

    //check if the user is valid
    checkValidUser(email: string, password: string) {
        //create a user from user model
        // const user = new User('12@hotmail.com', '123456789');
        // if ((user.getPassword() === password) && (user.getEmail() === email)) {
        //     return true;
        // }
        return true;
    }
    //navigate into  welcome page
    unlockApp(router: Router) {
        router.navigate(["/main/welcomePage"]);
    }



}