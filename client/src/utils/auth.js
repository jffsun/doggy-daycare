// used to decode a token and get user's information
import decode from 'jwt-decode';

class AuthService {
    // decodes user data from token
    getProfile() {
        return decode(this.getToken());
    };

    // return true or false if token exists
    loggedIn() {
        const token = this.getToken();    
        return token ? true : false;
    };
    
    login(idToken) {
       // retrives token from local storage and reloads page to apply login status
       
    }

    getToken() {
        // retrives token from local storage
        return localStorage.getItem(`id_token`);
    }

}
