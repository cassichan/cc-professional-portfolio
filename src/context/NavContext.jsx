import { createContext, useRef } from "react";

export const NavContext = createContext();

export function NavContextProvider({ children }) {
  const { Provider } = NavContext;
  const skills = useRef(null);
  const education = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const value = {
    skills,
    education,
    experience,
    projects,
    contact,
  };

  return <Provider value={value}>{children}</Provider>;
}
