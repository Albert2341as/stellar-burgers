import { FC, SyntheticEvent, useState, useEffect } from 'react';
import { LoginUI } from '@ui-pages';
<<<<<<< HEAD
import { useDispatch } from '../../services/store';
import { useNavigate } from 'react-router-dom';
import { loginUserThunk } from '../../services/slices/user';
=======
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '@store';
import { loginUserThunk, clearUserError } from '@slices';
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

export const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUserThunk({ email, password }));
      if (loginUserThunk.fulfilled.match(resultAction)) {
        navigate('/');
      } else {
        // Handle login failure if necessary
        alert('Неправильный логин или пароль');
        console.error('Login failed:', resultAction.payload);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
=======
  const error = useSelector((state) => state.user.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(clearUserError());
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUserThunk({ email, password }));
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
  };

  return (
    <LoginUI
      errorText={error?.toString()}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
