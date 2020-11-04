
#### 1. Install all the packages from the root package.json:
```
npm i
```

##### If you face 'gyp: No Xcode or CLT version detected!' problem:

Follow the instructions from the post:
https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d

If the described solution doesn't work for you, please install the xcode command tools from the official website:
https://developer.apple.com/download/more/

(Look for the 'Command Line Tools for Xcode' that's compatible with your OS)

#### 2. Bootstrap lerna

```
lerna bootstrap
lerna run build
```

#### 3. Now storybook can be successfully build

```
npm run storybook
```

The storybook should be accessible at http://localhost:6006/ 