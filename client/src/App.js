import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { commerce } from './commerce';
import { AnimatePresence } from 'framer-motion';
import themeApp from './styles/Theme';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import Profile from './Profile/Profile';
import './App.css';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import SignUp from './SignUp/SignUp';
import { ThemeProvider } from '@material-ui/styles';
import { getCookie, handleLogin, isLoggedIn } from './profileFunctions';
import { AppDispatch, AppState } from './ContextAPI/Context';
import Footer from './Footer/Footer';
import Aboutme from './AboutMe/Aboutme';

const App = () => {
    const location = useLocation();
    const [images, setImages] = useState([]);
    const [cart, setCart] = useState({});
    const [categories, setCategories] = useState([]);
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState({});
    const [profile, setProfile] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const token = useRef(null);

    const appState = useContext(AppState);
    const appDispatch = useContext(AppDispatch);

    const { currentCategory } = appState;

    const fetchCategories = async () => {
        try {
            const { data } = await commerce.categories.list();
            setCategories(data);
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    const fetchImages = async () => {
        try {
            const { data } = await commerce.products.list();
            setImages(data);
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    const fetchCart = async () => {
        try {
            const cart = await commerce.cart.retrieve();
            setCart(cart);
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    };

    const handleAddToCart = async (productId, quantity, variant) => {
        try {
            const { cart } = await commerce.cart.add(productId, quantity, variant);
            setCart(cart);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCartItem = async itemId => {
        try {
            const { cart } = await commerce.cart.remove(itemId);
            setCart(cart);
        } catch (error) {}
    };

    const updateCartItem = async (itemId, quantity) => {
        try {
            const { cart } = await commerce.cart.update(itemId, { quantity: quantity });
            setCart(cart);
        } catch (error) {}
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(
                checkoutTokenId,
                newOrder
            );
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    const findCookie = () => {
        const cookie = getCookie('x-access-token');
        token.current = cookie;
        return cookie;
    };

    const deleteCookie = name => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        token.current = '';
        setProfile({});
        setLoggedIn(false);
    };

    const isUserLoggedIn = useCallback(async () => {
        const cookie = findCookie('x-access-token');
        if (!cookie) {
            setLoggedIn(false);
        } else {
            const isLoggedInRes = await isLoggedIn(cookie);
            if (isLoggedInRes._id) {
                setLoggedIn(true);
                setProfile(isLoggedInRes);
            } else {
                setLoggedIn(false);
            }
        }
    }, []);

    const loginUser = async data => {
        try {
            const { email, password } = data;
            const loginReq = await handleLogin(email, password);
            if (loginReq._id) {
                findCookie('x-access-token');
                setLoggedIn(true);
                setProfile(loginReq);
            } else {
                setErrorMessage({ message: loginReq.message });
                setTimeout(() => {
                    setErrorMessage({});
                }, 4000);
            }
        } catch (error) {}
    };

    const getImages = useCallback(() => {
        if (images) {
            if (currentCategory.length === 0) {
                return appDispatch({
                    type: 'setCurrentImages',
                    currentImages: images,
                });
            }
            appDispatch({
                type: 'setCurrentImages',
                currentImages: images.filter(
                    img => img.categories[0].name === currentCategory[0].name
                ),
            });
        }
    }, [appDispatch, currentCategory, images]);

    useEffect(() => {
        fetchCategories();
        fetchImages();
        fetchCart();
        findCookie('x-access-token');
    }, []);

    useEffect(() => isUserLoggedIn(token.current), [isUserLoggedIn]);

    useEffect(() => getImages(), [getImages]);

    useEffect(() => window.scrollTo(0, 0), [location.pathname]);

    return (
        <React.Fragment>
            <ThemeProvider theme={themeApp}>
                <Navbar
                    totalItems={cart && cart.total_items}
                    profile={profile}
                    categories={categories}
                />
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/cart'>
                            <Cart
                                cart={cart}
                                handleEmptyCart={handleEmptyCart}
                                deleteCartItem={deleteCartItem}
                                updateCartItem={updateCartItem}
                            />
                        </Route>
                        <Route exact path='/checkout'>
                            <Checkout
                                cart={cart}
                                handleEmptyCart={handleEmptyCart}
                                profile={profile}
                                handleCaptureCheckout={handleCaptureCheckout}
                            />
                        </Route>
                        <Route exact path='/aboutme'>
                            <Aboutme />
                        </Route>
                        <Route path='/gallery'>
                            <Gallery
                                handleAddToCart={handleAddToCart}
                                token={token}
                                profile={profile}
                                setProfile={setProfile}
                                loggedIn={loggedIn}
                            />
                        </Route>
                        <Route path='/profile'>
                            <Profile
                                profile={profile}
                                handleLogin={loginUser}
                                token={token}
                                setProfile={setProfile}
                                images={images}
                                handleAddToCart={handleAddToCart}
                                deleteCookie={deleteCookie}
                            />
                        </Route>
                        <Route exact path='/signup'>
                            {profile._id && token.current ? (
                                <Redirect to='/profile' />
                            ) : (
                                <SignUp
                                    handleLogin={loginUser}
                                    setErrorMessage={setErrorMessage}
                                    errorMessage={errorMessage}
                                />
                            )}
                        </Route>
                    </Switch>
                </AnimatePresence>
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;
