import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import AppLayout from "./components/layouts/AppLayout";
import UserList from "./components/UserList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ProductList from "./pages/ProductList";
function App() {
  return (
    <BrowserRouter>
    <AppLayout>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit/:id" element={<EditUser />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="edit-product/:id" element={<EditProduct />} />
    </Routes>
    </AppLayout>
    </BrowserRouter>
  );
}

export default App;
