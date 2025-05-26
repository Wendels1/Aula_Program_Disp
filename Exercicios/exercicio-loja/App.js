import React from "react";

import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./src/routes/StackRoutes";

export default function App() {

  // Configuração do tema do React Native Paper
  const temaEscuro= {
    dark: true,
    colors: {
      primary: "#1E1E1E",
      accent: "#6200EE",
      background: "#121212",
      surface: "#1E1E1E",
      text: "#FFFFFF",
      disabled: "#A1A1A1",
      placeholder: "#A1A1A1",
      backdrop: "#000000",
    },
  };


  return (
    <PaperProvider theme={temaEscuro}>
      <NavigationContainer> 
        <StackRoutes />
      </NavigationContainer>
    </PaperProvider>  
  );
}
