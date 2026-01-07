import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Stack from "@/pages/stack";
import Solutions from "@/pages/solutions";
import SolutionDetail from "@/pages/solution-detail";
import Vision from "@/pages/vision";
import Insights from "@/pages/cases";
import ArticleDetail from "@/pages/article-detail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/stack" component={Stack} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/solutions/:slug" component={SolutionDetail} />
      <Route path="/vision" component={Vision} />
      <Route path="/cases" component={Insights} />
      <Route path="/insights/:id" component={ArticleDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
