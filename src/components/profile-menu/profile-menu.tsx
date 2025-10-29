<<<<<<< HEAD
// profile-menu.tsx

import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useDispatch } from '../../services/store';
import { logout } from '../../services/slices/userSlice';
=======
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
>>>>>>> feature-new

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();

<<<<<<< HEAD
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
    } catch (_) {}
  };
=======
  const handleLogout = () => {};
>>>>>>> feature-new

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
