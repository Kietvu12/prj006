import React, { createContext, useState } from 'react';

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <MoodContext.Provider value={{ selectedMood, setSelectedMood }}>
      {children}
    </MoodContext.Provider>
  );
};