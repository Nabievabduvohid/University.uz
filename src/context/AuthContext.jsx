import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem('university_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Mock login logic
    if (username && password) {
      const mockUser = {
        name: username, // Just using username as name if not available
        username: username,
        favorites: [],
      };
      
      // Let's check if there's a registered user first
      const registeredUsers = JSON.parse(localStorage.getItem('university_registered_users')) || [];
      const userExists = registeredUsers.find(u => u.username === username && u.password === password);

      if (userExists) {
        setUser(userExists);
        localStorage.setItem('university_user', JSON.stringify(userExists));
        return { success: true };
      } else if (username === 'admin' && password === 'admin') {
        // Mock admin login fallback
        const adminUser = { name: 'Admin', username: 'admin', favorites: [] };
        setUser(adminUser);
        localStorage.setItem('university_user', JSON.stringify(adminUser));
        return { success: true };
      } else {
        return { success: false, message: "Username yoki parol noto'g'ri (Foydalanuvchi topilmadi)" };
      }
    }
    return { success: false, message: "Ma'lumotlarni to'ldiring" };
  };

  const register = (username, password, name) => {
    if (username && password && name) {
      const registeredUsers = JSON.parse(localStorage.getItem('university_registered_users')) || [];
      
      const userExists = registeredUsers.find(u => u.username === username);
      if (userExists) {
        return { success: false, message: "Bu username band" };
      }

      const newUser = {
        name,
        username,
        password, // storing plain text only for mock purpose!
        favorites: []
      };

      registeredUsers.push(newUser);
      localStorage.setItem('university_registered_users', JSON.stringify(registeredUsers));
      
      // Log them in immediately after registration
      const loggedInUser = { name, username, favorites: [] };
      setUser(loggedInUser);
      localStorage.setItem('university_user', JSON.stringify(loggedInUser));
      
      return { success: true };
    }
    return { success: false, message: "Barcha maydonlarni to'ldiring" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('university_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
