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
}

interface ICompanyContextProviderProps {
  children: ReactNode;
}

export const defaultState = {
  company: { name: "", description: "" },
  setCompany: () => {},
};

export const CompanyContext = createContext<ICompany>(defaultState);

export function CompanyContextProvider({
  children,
}: ICompanyContextProviderProps) {
  const [company, setCompany] = useState<Company>({
    name: "",
    description: "",
  });

  const value = useMemo(
    () => ({
      company,
      setCompany,
    }),
    [company]
  );

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
}
