import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import * as Pages from "./pages";
import { THEME } from "./constants";

function App() {
  // Initialize queryClient to pass on data to App using React Query
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={THEME}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Pages.Dashboard} exact />
            <Route path="/products/:id" component={Pages.Product} exact />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
