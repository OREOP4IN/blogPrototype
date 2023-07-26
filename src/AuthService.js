export const authenticateUser = (username, password) => {
    if (
      (username === 'hola' && password === 'soydora') ||
      (username === 'dettol' && password === '122') ||
      (username === 'nasipadang' && password === 'nikmat')  
      // password dari encryption divisi+role+ID kekny menarik
    ) {
      return true; // Authentication successful
    } else {
      return false; // Authentication failed
    }
  };