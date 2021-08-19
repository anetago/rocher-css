
# RocherCSS
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

RocherCSS is a lightweight and modular front-end css framework for powerful and easygoing web design interface.

## Getting Started
To prevent conflicting with the others framework, RocherCSS requires when you should use this in the container with `.rocher` class. Therefore, we recommend to insert to `<body>` class.


```html
</head>
<body class="rocher">
```
or
```html
</head>
<body>
    <div class="rocher">
```

Several getting start options are available:

- Clone the repo : `git clone https://github.com/Anetago/RocherCSS.git`
- Install with [npm](https://www.npmjs.com/package/rochercss) : `npm install --save-dev rochercss`
- Install with yarn

### Add the Viewport Meta Element
On the mobile browsers, the Viewport `meta` element lets you control the width and scale of the viewport. As you are buiding a responsive webisite, we recommend to add this into your page's `<head>` because the width to be qeual to the device's native width.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Local Setup
Clone the repo from Github and install dependencies trought npm.

```
git clone https://github.com/Anetago/RocherCSS.git
cd RocherCSS
npm install
````

## Documentation
The documantation resides in the docs directory

## License
The code released under the [Apache 2.0 License](https://github.com/Anetago/RocherCSS/blob/main/LICENSE).

