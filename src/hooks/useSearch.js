import { useMemo, useState } from "react";

export const useSearch = (students) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [batchFilter, setBatchFilter] = useState("All");

  const filteredItems = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCourse =
        courseFilter === "All" || student.course === courseFilter;
      const matchesStatus =
        statusFilter === "All" || student.status === statusFilter;
      const matchesBatch =
        batchFilter === "All" || student.batch === batchFilter;

      return matchesSearch && matchesCourse && matchesStatus && matchesBatch;
    });
  }, [students, searchTerm, courseFilter, statusFilter, batchFilter]);

  return {
    searchTerm,
    setSearchTerm,
    courseFilter,
    setCourseFilter,
    statusFilter,
    setStatusFilter,
    batchFilter,
    setBatchFilter,
    filteredItems,
  };
};
