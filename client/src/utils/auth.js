// used to decode a token and get user's information
import decode from 'jwt-decode';

class AuthFunctions {
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
       localStorage.setItem('id_token', idToken);
       window.location.assign('/');
    };

    getToken() {
        // retrives token from local storage
        return localStorage.getItem('id_token');
    };

    logout() {
        // removes token from local storage to log user out and reloads the application to apply changes
        localStorage.removeItem('id_token');
        window.location.assign('/');
    };
};

export default new AuthFunctions();
