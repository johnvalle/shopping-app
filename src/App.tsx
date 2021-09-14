import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import * as Pages from "./pages";
import { THEME } from "./constants";
import { persistor, store } from "./stores";

function App() {
  // Initialize queryClient to pass on data to App using React Query
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={THEME}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Pages.Dashboard} exact />
                <Route path="/products/:id" component={Pages.Product} exact />
              </Switch>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
