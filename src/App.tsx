// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider, Title } from "@mantine/core";
import { AppLayout } from "./_components/AppShell";
import { HashRouter, Route, Routes } from "react-router-dom";
import { WeekList } from "./pages/weeks/page";
import LicensePage from "./pages/licenses/page";
import Week1 from "./pages/weeks/Week1";
import Week2 from "./pages/weeks/Week2";
import Week3 from "./pages/weeks/Week3";
import Week4 from "./pages/weeks/Week4";
import Week5 from "./pages/weeks/Week5";
import Week6 from "./pages/weeks/Week6";
import Week7 from "./pages/weeks/Week7";
import Week8 from "./pages/weeks/Week8";
import Week9 from "./pages/weeks/Week9";
import Week10 from "./pages/weeks/Week10";
import Week11 from "./pages/weeks/Week11";
import { ModalsProvider } from "@mantine/modals";
import { RootPage } from "./pages/page";
import Arch1Page from "./pages/arch1/page";
import CRCCards from "./pages/arch1/CRCCards";
import BehavioralPage from "./pages/arch1/Behavioral";
import StructuralPage from "./pages/arch1/Structural";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <ModalsProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={<AppLayout />}
            >
              <Route
                path=""
                element={<RootPage />}
              />
              <Route
                path="test"
                element={<Title>Test Page</Title>}
              />
              <Route
                path="licenses"
                element={<LicensePage />}
              />
              <Route path="arch1">
                <Route
                  index
                  element={<Arch1Page />}
                />
                <Route
                  path="crc-cards"
                  element={<CRCCards />}
                />
                <Route
                  path="behavioral"
                  element={<BehavioralPage />}
                />
                <Route
                  path="structural"
                  element={<StructuralPage />}
                />
              </Route>
              <Route path="weeks">
                <Route
                  index
                  element={<WeekList />}
                />
                <Route
                  path="1"
                  element={<Week1 />}
                />
                <Route
                  path="2"
                  element={<Week2 />}
                />
                <Route
                  path="3"
                  element={<Week3 />}
                />
                <Route
                  path="4"
                  element={<Week4 />}
                />
                <Route
                  path="5"
                  element={<Week5 />}
                />
                <Route
                  path="6"
                  element={<Week6 />}
                />
                <Route
                  path="7"
                  element={<Week7 />}
                />
                <Route
                  path="8"
                  element={<Week8 />}
                />
                <Route
                  path="9"
                  element={<Week9 />}
                />
                <Route
                  path="10"
                  element={<Week10 />}
                />
                <Route
                  path="11"
                  element={<Week11 />}
                />
              </Route>
            </Route>
          </Routes>
        </HashRouter>
      </ModalsProvider>
    </MantineProvider>
  );
}
