import Application from '../../app';
import config from '../../config/environment';
import {assign} from '@ember/polyfills';
import {run} from '@ember/runloop';

export default function startApp(attrs) {
  let application;

  const attributes = assign({}, config.APP, attributes, attrs);

  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
