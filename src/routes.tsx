import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Weekly from './pages/Weekly';
import Evidence from './pages/Evidence';
import Settings from './pages/Settings';
import Welcome from './pages/Welcome';
import LP from './pages/LP';
import Layout from './Layout';
export default function AppRoutes(){
return (
<BrowserRouter>
<Routes>
<Route element={<Layout/>}>
<Route path="/" element={<Welcome/>} />
<Route path="/home" element={<Home/>} />
<Route path="/weekly" element={<Weekly/>} />
<Route path="/evidence" element={<Evidence/>} />
<Route path="/settings" element={<Settings/>} />
<Route path="/lp" element={<LP/>} />
</Route>
<Route path="*" element={<Navigate to="/" />} />
</Routes>
</BrowserRouter>
);
}