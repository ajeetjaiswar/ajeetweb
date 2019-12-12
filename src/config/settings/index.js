import merge from 'lodash/merge';
import development from './development';
import local from './local';
import stag from './stag';
import prod from './prod';
import EnvConstants from '../../constants/envConstants';

const settings = {}
export default (() => {

  switch (process.env.REACT_APP_ENV) {
    case EnvConstants.development:
    case EnvConstants.dev:
      return merge(development, settings)
    case EnvConstants.staging:
    case EnvConstants.stag:
      return merge(stag, settings)
    case EnvConstants.production:
    case EnvConstants.prod:
      return merge(prod, settings)
    case EnvConstants.localhost:
    case EnvConstants.local:
      return merge(local, settings)
    default:
      return merge(development, settings)
  }
})()
