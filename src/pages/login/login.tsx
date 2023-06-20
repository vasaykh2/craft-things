import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../types/store';
import { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../services/hooks/useForm';
import { patchUserInfo } from '../../services/actions/user';

import styles from './login.module.css';
import { Console } from 'console';

const Login: FC = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const { values, handleChange, isValid } = useForm(
    { name: '', about: '' },
    false
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    dispatch(patchUserInfo(values));
  };

  return (
    <div className={`${styles.container}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={`${styles.title}  text text_type_main-medium`}>Вход</h1>
        <Input
          placeholder='name'
          name='name'
          onChange={(evt) => handleChange(evt)}
          value={values.name ? values.name : ''}
        />
        <Input
          placeholder='about'
          name='about'
          onChange={(evt) => handleChange(evt)}
          value={values.about ? values.about : ''}
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={!isValid && !!userInfo}
        >
          Войти
        </Button>
      </form>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        Вы — новый пользователь?
        <Link className={styles.link} to='/register'>
          Зарегистрироваться
        </Link>
      </p>
      <p className='text text_type_main-default text_color_inactive mt-4'>
        Забыли пароль?
        <Link className={styles.link} to='/forgot-password'>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};

export default Login;
