import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from '../../services/store';
import {
  fetchUserDataThunk,
  selectCurrentUser,
  updateUserDataThunk
} from '../../services/slices/user';
=======
import { useSelector, useDispatch } from '@store';
import { getUserSelector, updateUserThunk } from '@slices';
import { TUser } from '@utils-types';
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

export const Profile: FC = () => {
  /** TODO: взять переменную из стора */
  const dispatch = useDispatch();
<<<<<<< HEAD
  const profileInfo = useSelector((state) => selectCurrentUser(state.user));
  const user = {
    name: profileInfo?.name || '',
    email: profileInfo?.email || ''
  };
=======
  const user = useSelector(getUserSelector) as TUser;
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
    password: ''
  });

  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    dispatch(updateUserDataThunk(formValue));
    dispatch(fetchUserDataThunk);
    alert('данные успешно изменены');
=======
    dispatch(updateUserThunk(formValue));
    setFormValue({
      ...user,
      password: ''
    });
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    setFormValue({
      name: user.name,
      email: user.email,
      password: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );

  return null;
};
