#Getting started

- Install Meteor.js
```
$ curl https://install.meteor.com | /bin/sh
```

- Update dependencies (in the project directory)
```
$ meteor npm install
```

- Run locally
```
$ meteor
```

- Build for mobile (cordova)
```
$ meteor build path/to/build/directory --server=https://localhost:3000 --debug
```
(two project folders (iOS and Android) will be available at path/to/build/directory)

Your local machine must be properly configured to build for cordova. See [here](https://guide.meteor.com/mobile.html#introduction) for instructions.