import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { PATHS } from "../config/routes.config";
import {
  Cart,
  FinalLevel,
  HomePage,
  ListProductMobile,
  LoginAdmin,
  ManageInventoryAndPrices,
  OrderManagement,
  PaymenyGateway,
  PaymentResult,
  Product,
  ProductManagement,
  ListProductLaptop,
  ListProductCamera
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
          <Route path={PATHS.LIST_PRODUCT_MOBILE} element={<ListProductMobile />} />
          <Route path={PATHS.LIST_PRODUCT_LAPTOP} element={<ListProductLaptop />} />
          <Route path={PATHS.LIST_PRODUCT_CAMERA} element={<ListProductCamera />} />
          <Route path={PATHS.LOGIN_ADMIN} element={<LoginAdmin />} />
          <Route path={PATHS.PRICES} element={<ManageInventoryAndPrices />} />
          <Route path={PATHS.ORDER} element={<OrderManagement />} />
          <Route path={PATHS.GATEWAY} element={<PaymenyGateway />} />
          <Route path={PATHS.RESULT} element={<PaymentResult />} />
          <Route path={[PATHS.PRODUCT, ':id'].join("/")} element={<Product />} />
          <Route path={PATHS.MANAGEMENT} element={<ProductManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default HandleRoutes;
