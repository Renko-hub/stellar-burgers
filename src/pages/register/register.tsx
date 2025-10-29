<<<<<<< HEAD
// register.tsx

import { FC, SyntheticEvent, useState } from 'react';
import { RegisterUI } from '@ui-pages';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';
import { register } from '../../services/slices/userSlice';

export const Register: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registerError } = useSelector((state) => state.user);

=======
import { FC, SyntheticEvent, useState } from 'react';
import { RegisterUI } from '@ui-pages';

export const Register: FC = () => {
>>>>>>> feature-new
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

<<<<<<< HEAD
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await dispatch(register({ name: userName, email, password })).unwrap();

      navigate('/profile', { replace: true });
    } catch (_) {}
=======
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
>>>>>>> feature-new
  };

  return (
    <RegisterUI
<<<<<<< HEAD
      errorText={registerError?.message}
=======
      errorText=''
>>>>>>> feature-new
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
