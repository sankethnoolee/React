/*
*
* to generate production build 
*
*/
npm run build

/*
*
* to host a npm server 
*
*/
npm install -g serve

/*
*
* start using the build which is generated
*
*/
serve -s build

/*
*
* in the case serve cannot started 
* serve not recognized as command configure bin path or 
* use the command below.
*
*/
npx serve -s build