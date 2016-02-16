# rebilly-js-demo

> Form demonstrating the basic functionality of the Rebilly JS library for payment token creation.

## Optional Setup — Node JS

``` bash
# install dependencies
npm install

# serve at localhost:3030 (default port)
npm start
```

You need to modify the authentication key defined by `Rebilly.setAuth` in `index.html` then browse to [http://localhost:3030/](http://localhost:3030/).

## Troubleshooting

- If the API returns status `401 Unauthorized` verify that your authentication key is set and that you are using the API `user` and `key` from the correct Rebilly mode (sandbox/live).

