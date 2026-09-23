import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { defaultProfile, initialStudentsData } from "../data/students";

const StudentContext = createContext();

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

  const addStudent = (newStudent) => {
    setStudents((prev) => [
      ...prev,
      {
        ...newStudent,
        id: `STU-${Math.floor(1000 + Math.random() * 9000)}`,
        attendance: { present: 0, absent: 0, total: 0 },
      },
    ]);
  };

  const updateStudent = (id, updatedData) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, updatedData } : student,
      ),
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const markAttendance = (id, type) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === id) {
          const present =
            type === "present"
              ? student.attendance.present + 1
              : student.attendance.present;

          const absent =
            type === "absent"
              ? student.attendance.absent + 1
              : student.attendance.absent;

          return {
            ...student,
            attendance: { present, absent, total: present + absent },
          };
        }
        return student;
      }),
    );
  };
  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent,
        markAttendance,
        profile,
        setProfile,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
