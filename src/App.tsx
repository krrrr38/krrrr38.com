import { Route, Routes } from "react-router-dom";
import { Analytics } from "./components/Analytics";
import { Layout } from "./components/Layout";
import { CvEnPage } from "./pages/CvEnPage";
import { CvJaPage } from "./pages/CvJaPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cv/en" element={<CvEnPage />} />
          <Route path="cv/ja" element={<CvJaPage />} />
        </Route>
      </Routes>
    </>
  );
}
