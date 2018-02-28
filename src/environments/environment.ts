// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCk62dNbf8NmQAcfMa05RECDR8FfkaXO0w',
    authDomain: 'course-tracker-47fab.firebaseapp.com',
    databaseURL: 'https://course-tracker-47fab.firebaseio.com',
    projectId: 'course-tracker-47fab',
    storageBucket: 'course-tracker-47fab.appspot.com',
    messagingSenderId: '910268545128'
  }
};
