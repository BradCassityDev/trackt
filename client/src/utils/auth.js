import decode from 'jwt-decode';

class AuthService {
    // Get profile info from token
    getProfile() {
      return decode(this.getToken());
    }
  
    // Check logged in status
    loggedIn() {
      const token = this.getToken();

      return !!token && !this.isTokenExpired(token);
    }
  
    // Check if token is valid
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    }
  
    // Grab token from localStorage
    getToken() {
      return localStorage.getItem('id_token');
    }
  
    // Save token to localStorage
    login(idToken) {
      localStorage.setItem('id_token', idToken);
  
      window.location.assign('/');
    }
  
    // Remove token from localStorage
    logout() {
      localStorage.removeItem('id_token');
      
      window.location.assign('/login');
    }
  }

export default new AuthService();