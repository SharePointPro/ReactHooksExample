This project is an example of using global state with React Hooks to replace Redux.
It uses a higher order component at the top level to replace the redux store.

This project is a React Hooks & Create React App implementation of a React Redux project https://github.com/robertbg/swapi-react

While much of the code has been taken directly from robertbg's original project, I have created this project from scratch using Create React App rather than forking Robert's project.

React hooks may be a good alternative to Redux however react hooks was never designed to replace Redux. If you are making frequent changes to a store you should consider using Redux rather than React Hooks.

However for infrequent changes (ie not on keypress's) react hooks can help minimize your project size.

Demo implementation can be found here: https://vibrant-khorana-2c9a5a.netlify.com/

Technologies used:

* React
* Create-React-Apps
* React Hooks
* SCSS

Recommended Resource: https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w
