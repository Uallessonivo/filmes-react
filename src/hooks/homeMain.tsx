import { useContext, ReactNode, useState, createContext } from "react";

// Type contexto
interface MainContextData {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

interface MainProviderProps {
  children: ReactNode;
}

const MainContext = createContext<MainContextData>({} as MainContextData);

export function MainProvider({ children }: MainProviderProps) {
  // Inicializando o contexto

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <MainContext.Provider value={{ selectedGenreId, handleClickButton }}>
      {children}
    </MainContext.Provider>
  );
}

export function homeMain() {
  const context = useContext(MainContext);

  return context;
}
