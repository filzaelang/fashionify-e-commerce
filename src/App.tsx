import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SellerPage from "./pages/SellerPage"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SellerPage />} />
            </Routes>
        </Router>
    )
}

export default App