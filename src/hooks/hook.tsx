import { useState, useCallback, useEffect } from "react";
import type { Company } from "../components/models/company";
import { mockCompanies } from "../constants/mock-data";

export const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] =
    useState<Company[]>(mockCompanies);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all companies on mount
  useEffect(() => {
    fetchAllCompanies();
  }, []);

  const fetchAllCompanies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      //   const data = await companyService.getAllCompanies();
      setCompanies(mockCompanies);
      setFilteredCompanies(mockCompanies);
    } catch (err) {
      setError("Failed to fetch companies");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  //   const filterCompanies = useCallback(async (filters: FilterOptions) => {
  const filterCompanies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      //   const data = await companyService.filterCompanies(filters);
      setFilteredCompanies(mockCompanies);
    } catch (err) {
      setError("Failed to filter companies");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    companies,
    filteredCompanies,
    loading,
    error,
    filterCompanies,
  };
};
