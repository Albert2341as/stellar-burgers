import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
<<<<<<< HEAD
import { useDispatch } from '../../services/store';
import { logoutUserThunk } from '../../services/slices/user';
=======
import { useDispatch } from '@store';
import { logoutUserThunk } from '@slices';
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

export const ProfileMenu: FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
