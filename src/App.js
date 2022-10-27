import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import ShopPage from "./pages/CustomerPage/ShopPage/ShopPage";
import EventPage from "./pages/CustomerPage/EventsPage/EventPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MyCart from "./pages/CustomerPage/MyCart/MyCart";
import MyOrders from "./pages/CustomerPage/MyOrders/MyOrders";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import AddReviewPage from "./pages/CustomerPage/AddReviewPage/AddReviewPage";
import MyShop from "./pages/SellerPages/MyShop/MyShop";
import DiscountPage from "./pages/SellerPages/DiscountPage/DiscountPage";
import ShopProfile from "./pages/SellerPages/ShopProfile/ShopProfile";
import SalesHistory from "./pages/SellerPages/SalesHistory/SalesHistory";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import CreateAccount from "./pages/Auth/CreateAccount/CreateAccount";
import ProductsAll from "./pages/Auth/ProductsAll/ProductsAll";
import ShopAll from "./pages/Auth/ShopAll/ShopAll";
import SellerEventPage from "./pages/CustomerPage/EventsPage/SellerEventPage";
import SellerSidebar from "./components/Sidebar/SellerSideBar";
import SellerOrder from "./pages/SellerPages/SellerOrder/SellerOrder";
import SellerProducts from "./pages/SellerPages/SellerProducts/SellerProducts";
import EditProfile from "./pages/ProfilePage/EditProfile";
import ManagerSideBar from "./components/Sidebar/ManagerSideBar";
import ManagerEvent from "./pages/ManagerPages/ManagerEvents/ManagerEvent";
import ManagerOrder from "./pages/ManagerPages/ManagerOrders/ManagerOrder";
import ManageComplaints from "./pages/ManagerPages/ManageComplaints/ManageComplaints";
import PromotionRequest from "./pages/ManagerPages/SellerRegistrationRequests/RegistrationRequest";
import ManagerProfile from "./pages/ManagerPages/ManagerProfile/ManagerProfile";
import ManagerEditProfile from "./pages/ManagerPages/ManagerProfile/ManagerEditProfile";
import RegistrationRequestAccept from "./pages/ManagerPages/SellerRegistrationRequests/RegistrationRequestAccept";
import RegistrationRequestReject from "./pages/ManagerPages/SellerRegistrationRequests/RegistrationRequestReject";
import ComplaintsRespond from "./pages/ManagerPages/ManageComplaints/ComplaintsRespond";
import ManagerEventRemove from "./pages/ManagerPages/ManagerEvents/ManagerEventRemove";
import ManagerEventEdit from "./pages/ManagerPages/ManagerEvents/ManagerEventEdit";
import ManagerProducts from "./pages/ManagerPages/ManagerProducts/ManagerProduct";
import VisitShopPage from "./pages/ShopPage/VisitShopPage";
import BuyNow from "./components/ProductCard/BuyNow";
import AddToCart from "./components/ProductCard/AddToCart";
import AddProduct from "./pages/SellerPages/SellerProducts/AddProduct";
import SellerBuyNow from "./pages/SellerPages/SellerProducts/SellerBuyNow";
import SellerAddToCart from "./pages/SellerPages/SellerProducts/SellerAddToCart";
import SellerOrderEdit from "./pages/SellerPages/SellerOrder/SellerOrderEdit";
import SellerOrderRemove from "./pages/SellerPages/SellerOrder/SellerOrderRemove";
import AddGiveaways from "./pages/SellerPages/SellerEvent/AddGiveaways";
import EditGiveaways from "./pages/SellerPages/SellerEvent/EditGiveaways";
import RemoveGiveaways from "./pages/SellerPages/SellerEvent/RemoveGiveaways";
import CreateDiscount from "./pages/SellerPages/DiscountPage/CreateDiscount";
import UpdateDiscount from "./pages/SellerPages/DiscountPage/UpdateDiscount";
import RemoveDiscount from "./pages/SellerPages/DiscountPage/RemoveDiscount";
import EditShopProfile from "./pages/SellerPages/ShopProfile/EdtiShopProfile";
import RemoveCartProduct from "./pages/CustomerPage/MyCart/RemoveCartProduct";
import HelpPage from "./pages/HelpPage/HelpPage";
import AdminSideBar from "./components/Sidebar/AdminSideBar";
import ManageCategory from "./pages/AdminPages/ManageCategory/ManageCategory";
import AddNewCategory from "./pages/AdminPages/ManageCategory/AddNewCategory";
import UpdateCategory from "./pages/AdminPages/ManageCategory/UpdateCategory";
import RemoveCategory from "./pages/AdminPages/ManageCategory/RemoveCategory";
import ManageUser from "./pages/AdminPages/ManageUsers/ManageUser";
import SystemReport from "./pages/AdminPages/SystemReport/SystemReport";
import { AuthProvider, useAuthUser } from 'react-auth-kit'
import MyShopSideBar from "./components/Sidebar/MyShopSideBar";
function App() {
    // const isLogin = false;

   
    const router = useLocation();
    // const auth = useAuthUser()
    const isDashboard = router.pathname === "/" ? true : false;
    const isLogin = router.pathname.match(/login/);
    const isCreateAccount = router.pathname.match(/createAccount/);
    const isProductAll = router.pathname.match(/productAll/);
    const isShopAll = router.pathname.match(/shopAll/);


    const check = () => {
        if (isDashboard || isLogin !== null || isCreateAccount !== null || isProductAll !== null || isShopAll !== null) {
            return true;
        } else {
            return false;
        }
    };

    const styles = {
        flexDirection: "row",
        display: "flex",
    };
    return (
        <AuthProvider authType={'cookie'}
            authName={'_auth'}
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === "https:"}>
            <div>
                {true === check() ? <Navbar /> : <SubNavbar />}

                <div style={false === check() ? styles : null}>
                    {false === check() && <MyShopSideBar/>}

                    <Routes>
                        {/* default pages */}

                        <Route exact path="/" element={<LandingPage />} />
                        <Route exact path="/productAll" element={<ProductsAll />} />
                        <Route exact path="/shopAll" element={<ShopAll />} />
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route exact path="/createAccount" element={<CreateAccount />} />

                        {/* customer pages */}
                        <Route exact path="/product" element={<CustomerPage />} />
                        <Route exact path="/buy_now" element={<BuyNow />} />
                        <Route exact path="/add_to_cart" element={<AddToCart />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/event" element={<EventPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/profile/editprofile" element={<EditProfile />} />
                        <Route path="/cart" element={<MyCart />} />
                        <Route path="/cart/removeCartProduct" element={<RemoveCartProduct />} />
                        <Route path="/orders" element={<MyOrders />} />
                        <Route path="/orders/addreview" element={<AddReviewPage />} />
                        <Route path="/help" element={<HelpPage />} />

                        {/* seller pages */}
                        <Route exact path="/myshop" element={<MyShop />} />
                        <Route exact path="/seller_product" element={<SellerProducts />} />
                        <Route exact path="/seller_buy_now" element={<SellerBuyNow />} />
                        <Route exact path="/seller_add_to_cart" element={<SellerAddToCart />} />
                        <Route exact path="/add_new_product" element={<AddProduct />} />
                        <Route exact path="/visit_shop" element={<VisitShopPage />} />
                        <Route path="/seller_orders" element={<SellerOrder />} />
                        <Route path="/seller_order/edit_order" element={<SellerOrderEdit />} />
                        <Route path="/seller_order/remove_order" element={<SellerOrderRemove />} />
                        <Route path="/seller_event" element={<SellerEventPage />} />
                        <Route path="/seller_event/add_giveaways" element={<AddGiveaways />} />
                        <Route path="/seller_event/edit_giveaways" element={<EditGiveaways />} />
                        <Route path="/seller_event/remove_giveaways" element={<RemoveGiveaways />} />
                        <Route path="/discounts" element={<DiscountPage />} />
                        <Route path="/discounts/create_discount" element={<CreateDiscount />} />
                        <Route path="/discounts/update_discount" element={<UpdateDiscount />} />
                        <Route path="/discounts/remove_discount" element={<RemoveDiscount />} />
                        <Route path="/salesHistory" element={<SalesHistory />} />
                        <Route path="/shopProfile" element={<ShopProfile />} />
                        <Route path="/shopProfile/edit_shopProfile" element={<EditShopProfile />} />


                        {/* Manager pages */}
                        <Route exact path="/manager_products" element={<ManagerProducts />} />
                        <Route exact path="/manager_products/visit_shop" element={<VisitShopPage />} />
                        <Route exact path="/shop" element={<ShopPage />} />
                        <Route exact path="/shop/visit_shop" element={<VisitShopPage />} />
                        <Route path="/manager_events" element={<ManagerEvent />} />
                        <Route path="/manager_events/edit_event" element={<ManagerEventEdit />} />
                        <Route path="/manager_events/remove_event" element={<ManagerEventRemove />} />
                        <Route path="/manager_orders" element={<ManagerOrder />} />
                        <Route path="/complaints" element={<ManageComplaints />} />
                        <Route path="/complaints/repond" element={<ComplaintsRespond />} />
                        <Route path="/registration_request" element={<PromotionRequest />} />
                        <Route path="/registration_request/accept" element={<RegistrationRequestAccept />} />
                        <Route path="/registration_request/reject" element={<RegistrationRequestReject />} />
                        <Route path="/managerProfile" element={<ManagerProfile />} />
                        <Route path="/managerProfile/managereditprofile" element={<ManagerEditProfile />} />



                        {/*Admin pages */}
                        <Route exact path="/categories" element={<ManageCategory />} />
                        <Route exact path="/categories/add_category" element={<AddNewCategory />} />
                        <Route exact path="/categories/update_category" element={<UpdateCategory />} />
                        <Route exact path="/categories/remove_category" element={<RemoveCategory />} />
                        <Route exact path="/manage_users" element={<ManageUser />} />
                        <Route exact path="/system_report" element={<SystemReport />} />


                    </Routes>
                </div>
            </div>
        </AuthProvider>

    );
}

export default App;
