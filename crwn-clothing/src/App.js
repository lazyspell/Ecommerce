import { Routes, Route } from "react-router-dom";

import "./categories.styles.scss";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/sign-in/authentication.component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop/*" element={<Shop />} />
                <Route path="/sign-in" element={<Authentication />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
}

export default App;
