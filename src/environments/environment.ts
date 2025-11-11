// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //developmentIP: "http://35.178.141.73:8081",
  // developmentIP: 'http://' + location.hostname + ':8081/examalpha/api/v1',
  // developmentIP: "https://736ab3c5162e.ngrok.app/examalpha/api/v1",
  //new
  //developmentIP: "https://b28be17333dc.ngrok.app/examalpha/api/v1",
  // developmentIP: 'https://0df90ac58b47.ngrok.app/examalpha/api/v1',
  developmentIP: 'https://352e2b25d233.ngrok.app/examalpha/api/v1',
  // developmentIP: 'https://beta.examalpha.com:6080/examalpha/api/v1',
  // developmentIP: 'http://192.168.0.104:5002/examalpha/api/v1',
  // developmentIP: "http://" + location.hostname + ":8081/examalpha/api/v1",
  //developmentIP: 'http://192.168.101.141:8081',
  //developmentIP: 'http://192.168.177.141:8081',
  //schedulerIP: 'http://192.168.177.141:3201',
  //schedulerIP: 'http://35.178.141.73:3201', 
  // schedulerIP: "https://7695bc53780.ngrok.app",
  // new
  //schedulerIP: "https://500beb525a2a.ngrok.app",
  // schedulerIP: 'https://5775f45a3fec.ngrok.app',
  // schedulerIP: 'https://beta.examalpha.com:6080', 
    schedulerIP: 'https://352e2b25d233.ngrok.app',

  // schedulerIP: 'http://' + location.hostname + ':3201',
  org_id: '',
  key: '',
  defaultauth: 'fackbackend',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },

  secureStorageId: '_ID_MAP',
  ecureStorageKey: '######_ID_SECURE',
  showAppAssets: true
}; 

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
