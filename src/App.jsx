import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import routes from "./routes";

const Login = lazy(() => import('./views/login'))
const Layout = lazy(() => import('./containers/layout'))
const Loading = lazy(() => import('./containers/loader'))
const Home = lazy(() => import('./views/home'))


function App() {
  const routes = [
    { path: '/', element: <Home />, index: true },
  ];
  
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {routes.map((route, id) => {
              return (
                route.element && <Route key={id} index={route.index} path={route.path} element={route.element} />
              )
            })}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )

}

export default App
