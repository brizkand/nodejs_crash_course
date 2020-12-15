const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host root domain
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('name', 'John');
console.log(myUrl.searchParams);

//Loop to data
myUrl.searchParams.forEach((name, value) => console.log(`${name}: ${value}`));