const UserAuth = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  
  return isAuthenticated;
};
  
export default UserAuth;