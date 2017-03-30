//requister babel transpiler before test run
require('babel-register')();

//disable webpack features that mocha doesn't understand
require.extensions['.css']=function(){};