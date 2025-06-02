<<<<<<< HEAD
import {
  ConstructorPage,
  Feed,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  ProfileOrders,
  NotFound404
} from '@pages';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useParams,
  useNavigate
} from 'react-router-dom';
=======
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
import '../../index.css';
import styles from './app.module.css';
import {
  AppHeader,
  Modal,
  OrderInfo,
  IngredientDetails,
  ProtectedRoute,
  Center
} from '@components';
import { useDispatch } from '@store';
import {
  getIngredientsThunk,
  getUserStateSelector,
  getUserThunk
} from '@slices';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Preloader } from '../ui/preloader';

<<<<<<< HEAD
import { useDispatch, useSelector } from '../../services/store';
import { useEffect } from 'react';
import { loadIngredients } from '../../services/slices/ingredients';
import {
  verifyUserAuth,
  selectIsAuthVerified
} from '../../services/slices/user';

import { AppHeader, OrderInfo, IngredientDetails, Modal } from '@components';

const isAuthenticated = () => {
  const isAuth = useSelector((state) => selectIsAuthVerified(state.user));
  return isAuth;
};

interface ProtectedRouteProps {
  element: JSX.Element;
  requiresAuth: boolean;
}

// Компонент для защиты маршрутов
const ProtectedRoute = ({ element, requiresAuth }: ProtectedRouteProps) => {
  const auth = isAuthenticated();
  if (requiresAuth) {
    return auth ? element : <Navigate to='/login' />;
  } else {
    return !auth ? element : <Navigate to='/' />;
  }
};

const OrderInfoModal = () => {
  const { number } = useParams<{ number: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    if (location.state && location.state.background) {
      navigate(-1);
    } else {
      navigate('/feed');
    }
  };

  return (
    <Modal title='Информация о заказе' onClose={handleClose}>
      {number && <OrderInfo orderNumber={number} />}
    </Modal>
  );
};

const IngredientsDetailsModal = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    if (location.state && location.state.background) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Modal title='Детали ингредиента' onClose={handleClose}>
      {id && <IngredientDetails />}
    </Modal>
  );
};

const ModalSwitch = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/login'
          element={<ProtectedRoute element={<Login />} requiresAuth={false} />}
        />
        <Route
          path='/register'
          element={
            <ProtectedRoute element={<Register />} requiresAuth={false} />
          }
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute element={<ForgotPassword />} requiresAuth={false} />
          }
        />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute element={<ResetPassword />} requiresAuth={false} />
          }
        />
        <Route
          path='/profile'
          element={<ProtectedRoute element={<Profile />} requiresAuth />}
        />
        <Route
          path='/profile/orders'
          element={<ProtectedRoute element={<ProfileOrders />} requiresAuth />}
        />
        <Route
          path='/profile/orders/:number'
          element={<ProtectedRoute element={<ProfileOrders />} requiresAuth />}
        />
        <Route path='/feed/:number' element={<Feed />} />
        <Route path='/ingredients/:id' element={<ConstructorPage />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>

      {background && (
        <Routes>
          <Route path='/profile/orders/:number' element={<OrderInfoModal />} />
          <Route path='/feed/:number' element={<OrderInfoModal />} />
          <Route
            path='/ingredients/:id'
            element={<IngredientsDetailsModal />}
          />
        </Routes>
      )}

      {!background && (
        <Routes>
          <Route path='/profile/orders/:number' element={<OrderInfoModal />} />
          <Route path='/feed/:number' element={<OrderInfoModal />} />
          <Route
            path='/ingredients/:id'
            element={<IngredientsDetailsModal />}
          />
        </Routes>
      )}
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients());
    dispatch(verifyUserAuth());
  }, [dispatch]);

  return (
    <Router>
      <div className={styles.app}>
        <AppHeader />
        <ModalSwitch />
      </div>
    </Router>
=======
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userLoading = useSelector(getUserStateSelector).isLoadong;
  const backgroundLocation = location.state?.background;

  useEffect(() => {
    dispatch(getUserThunk());
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<ConstructorPage />} />
        <Route
          path='/ingredients/:id'
          element={
            <Center title={`Детали ингредиента`}>
              <IngredientDetails />
            </Center>
          }
        />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/feed/:number'
          element={
            <Center title={`#${location.pathname.match(/\d+/)}`}>
              <OrderInfo />
            </Center>
          }
        />
        <Route element={<ProtectedRoute forAuthorized={false} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Route>
        <Route element={<ProtectedRoute forAuthorized />}>
          <Route path='/profile'>
            <Route index element={<Profile />} />
            <Route path='orders' element={<ProfileOrders />} />
            <Route
              path='orders/:number'
              element={
                <Center title={`#${location.pathname.match(/\d+/)}`}>
                  <OrderInfo />
                </Center>
              }
            />
          </Route>
        </Route>
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route
            path='/feed/:number'
            element={
              <Modal
                title={`#${location.pathname.match(/\d+/)}`}
                onClose={() => {
                  navigate(-1);
                }}
              >
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path='/ingredients/:id'
            element={
              <Modal
                title={`Детали ингредиента`}
                onClose={() => {
                  navigate(-1);
                }}
              >
                <IngredientDetails />
              </Modal>
            }
          />
          <Route element={<ProtectedRoute forAuthorized />}>
            <Route
              path='/profile/orders/:number'
              element={
                <Modal
                  title={`#${location.pathname.match(/\d+/)}`}
                  onClose={() => {
                    navigate('/profile/orders');
                  }}
                >
                  <OrderInfo />
                </Modal>
              }
            />
          </Route>
        </Routes>
      )}
    </div>
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
  );
};

export default App;
