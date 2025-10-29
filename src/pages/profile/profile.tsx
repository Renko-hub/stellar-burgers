<<<<<<< HEAD
// profile.tsx

import { updateUser } from '../../services/slices/userSlice';
import { useDispatch, useSelector } from '../../services/store';
=======
>>>>>>> feature-new
import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';

export const Profile: FC = () => {
<<<<<<< HEAD
  const { data: user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
=======
  /** TODO: взять переменную из стора */
  const user = {
    name: '',
    email: ''
  };
>>>>>>> feature-new

  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
    password: ''
  });

  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState,
      name: user?.name || '',
      email: user?.email || ''
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    dispatch(updateUser(formValue));
=======
>>>>>>> feature-new
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
<<<<<<< HEAD
=======

  return null;
>>>>>>> feature-new
};
