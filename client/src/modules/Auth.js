class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(data) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('uID', data.id._id);

      // localStorage.setItem('uID', token)
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      return localStorage.getItem('token') !== null;
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('uID');
      
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getToken() {
      return localStorage.getItem('token');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getuID() {
      console.log("getting uID: " + localStorage.getItem('uID'))
      return localStorage.getItem('uID');
    }
  
  }

  export default Auth;

