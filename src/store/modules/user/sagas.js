import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { updateProfileSuccess, updateProfilefailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Falha na atualização', 'Erro ao atualizar Perfil');
    yield put(updateProfilefailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
