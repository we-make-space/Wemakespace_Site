import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import Stack from "@/pages/stack";
import Solutions from "@/pages/solutions";
import SolutionDetail from "@/pages/solution-detail";
import Vision from "@/pages/vision";
import Insights from "@/pages/cases";
import ArticleDetail from "@/pages/article-detail";
import PrivacyPolicy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import EventDetails from "@/pages/event-details";

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
      <Route path="/event" component={EventDetails} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
