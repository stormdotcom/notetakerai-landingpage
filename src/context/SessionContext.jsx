import { createContext, useContext, useState } from "react";

// Create Context
const SessionContext = createContext();

// Context Provider
export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState({});
  const [currentSession, setCurrentSession] = useState([]);

  // Function to update sessions
  const updateSessions = (newSessions) => {
    setSessions(newSessions);
  };
    // Function to update sessions
    const setCurrent = (summary) => {
      setCurrentSession(summary);
    };
  // Function to get sessions
  const getSessionById = (sessionId) => {
    return sessions[sessionId] || null;
  };

  return (
    <SessionContext.Provider value={{ sessions, currentSession, updateSessions, getSessionById, setCurrent }}>
      {children}
    </SessionContext.Provider>
  );
};


export const useSession = () => useContext(SessionContext);
