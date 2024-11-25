import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import('./views/login'))
const Layout = lazy(() => import('./containers/layout'))
const Loading = lazy(() => import('./containers/loader'))
const Home = lazy(() => import('./views/home'))


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
    </Router>
  )

}

export default App
