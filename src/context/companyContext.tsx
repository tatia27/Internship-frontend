import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

type Company = {
  name: string;
  description: string;
};

interface ICompany {
  company: Company;
  setCompany: Dispatch<SetStateAction<Company>>;
  internshipId: string | null;
  setInternshipId: Dispatch<SetStateAction<string | null>>;
}

interface ICompanyContextProviderProps {
  children: ReactNode;
}

export const defaultState = {
  company: { name: "", description: "" },
  setCompany: () => {},
  internshipId: null,
  setInternshipId: () => {},
};

export const CompanyContext = createContext<ICompany>(defaultState);

export function CompanyContextProvider({
  children,
}: ICompanyContextProviderProps) {
  const [company, setCompany] = useState<Company>({
    name: "",
    description: "",
  });
  const [internshipId, setInternshipId] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      company,
      setCompany,
      internshipId,
      setInternshipId,
    }),
    [company, internshipId]
  );

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
}
