import api from './modules/api';
import { AppCredentials } from './types/podio.type';
import Authentication from './modules/Authentication';

const podio = {
  auth: (prop: AppCredentials) => new Authentication(prop),
  api,
};

export default podio;
