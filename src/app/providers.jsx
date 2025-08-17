"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "../../redux/store"; 
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Providers;
