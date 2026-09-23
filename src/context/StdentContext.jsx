import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { defaultProfile, initialStudentsData } from "../data/students";

const studentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useLocalStorage(
    "sms_students",
    initialStudentsData,
  );

  const [profile, setProfile] = useLocalStorage(
    "sms_admin_profile",
    defaultProfile,
  );

  const [theme, setTheme] = useLocalStorage("sms_theme", "light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
};
