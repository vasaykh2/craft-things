import { useSelector, useDispatch } from '../../types/store';
import { useMemo, FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  //EmailInput,
  //PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { patchUserInfo } from '../../services/actions/user';
import { useForm } from '../../services/hooks/useForm';
import styles from './profile-form.module.css';

const ProfileForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  const { username, about } = userInfo || { username: '', about: '' };

  const { values, handleChange, isValid, resetForm, setValues } = useForm(
    {
      username: username,
      about: about,
    },
    true
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(patchUserInfo(values));
    setValues({ ...values, password: '' });
    navigate('/profile', { state: { from: { pathname: '/profile' } } });
  };

  const isValidChanges = useMemo(
    () =>
      userInfo &&
      isValid &&
      (userInfo.about !== values.about || userInfo.username !== values.username),
    [userInfo, values, isValid]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Имя'
        name='name'
        onChange={(e) => handleChange(e)}
        value={values.username || ''}
        icon={'EditIcon'}
      />
      <Input
        placeholder='О себе'
        name='about'
        onChange={(e) => handleChange(e)}
        value={values.about || ''}        
      />
      {/*<EmailInput
        placeholder='О себе'
        name='about'
        onChange={(e) => handleChange(e)}
        value={values.about || ''}
        isIcon={true}
      /> */}
      {/*<PasswordInput
        placeholder='Пароль'
        name='password'
        onChange={(e) => {
          handleChange(e);
        }}
        value={values.password || ''}
        icon={'EditIcon'}
      />*/}
      {isValidChanges ? (
        <div className={styles.containerOfButtons}>
          <Button
            htmlType='button'
            type='secondary'
            size='medium'
            onClick={resetForm}
            extraClass={styles.cancelButton}
          >
            Отмена
          </Button>
          <Button htmlType='submit' type='primary' size='medium'>
            Сохранить
          </Button>
        </div>
      ) : null}
    </form>
  );
};

export default ProfileForm;
