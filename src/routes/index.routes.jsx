import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATHS } from "../config/routes.config";
import {
  Cart,
  FinalLevel,
  HomePage,
  ListProduct,
  LoginAdmin,
  ManageInventoryAndPrices,
  OrderManagement,
  PaymenyGateway,
  PaymentResult,
  Product,
  ProductManagement,
} from "../Page/index";

function HandleRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.CART} element={<Cart />} />
          <Route path={PATHS.FINAL_LEVEL} element={<FinalLevel />} />
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.HOME_PAGE} element={<HomePage />} />
          <Route path={PATHS.LIST_PRODUCT} element={<ListProduct />} />
          <Route path={PATHS.LOGIN_ADMIN} element={<LoginAdmin />} />
          <Route path={PATHS.PRICES} element={<ManageInventoryAndPrices />} />
          <Route path={PATHS.ORDER} element={<OrderManagement />} />
          <Route path={PATHS.GATEWAY} element={<PaymenyGateway />} />
          <Route path={PATHS.RESULT} element={<PaymentResult />} />
          <Route path={PATHS.PRODUCT} element={<Product />} />
          <Route path={PATHS.MANAGEMENT} element={<ProductManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default HandleRoutes;
