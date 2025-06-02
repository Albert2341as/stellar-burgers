import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { RegisterUI } from '@ui-pages';
<<<<<<< HEAD
import { useDispatch } from '../../services/store';
import { registerUserThunk } from '../../services/slices/user';
import { useNavigate } from 'react-router-dom';

export const Register: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
=======
import { useDispatch, useSelector } from '@store';
import {
  clearUserError,
  registerUserThunk,
  getUserErrorSelector
} from '@slices';
import { error } from 'console';

export const Register: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(getUserErrorSelector);
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    dispatch(registerUserThunk({ email, password, name: userName }));
    navigate('/login');
=======
    const name = userName;
    dispatch(registerUserThunk({ email, name, password }));
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
  };

  useEffect(() => {
    dispatch(clearUserError());
  });

  return (
    <RegisterUI
      errorText={error?.toString()}
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
};
