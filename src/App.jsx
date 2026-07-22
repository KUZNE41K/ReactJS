import WrapperSidebarHeader from "./Components/Sidebar/WrapperSidebarHeader.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <Routes>

            <Route element={<WrapperSidebarHeader />}>

                <Route path="/products" element={<Dashboard />} />
                <Route path="/favorites" element={<Dashboard />} />
                <Route path="/inbox" element={<Dashboard />} />
                <Route path="/orders" element={<Dashboard />} />
                <Route path="/stock" element={<Dashboard />} />
                <Route path="/pricing" element={<Dashboard />} />
                <Route path="/calendar" element={<Dashboard />} />
                <Route path="/todo" element={<Dashboard />} />
                <Route path="/contacts" element={<Dashboard />} />
                <Route path="/invoice" element={<Dashboard />} />
                <Route path="/ui-elements" element={<Dashboard />} />
                <Route path="/team" element={<Dashboard />} />
                <Route path="/table" element={<Dashboard />} />
                <Route path="/settings" element={<Dashboard />} />
                <Route path="/logout" element={<Dashboard />} />


            </Route>

        </Routes>
    )
}
export default App


