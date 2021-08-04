## First run
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

## Development process:

1. Do the code changes
1. Build the component
1. Commit the changes
1. Version the component `npm run version` and then CI will publish your changes to the world

#### AD 2. Building a component

Building one of the components:

```
lerna run build:dep --scope=@boclips-ui/<name-of-component>
```
e.g.
```
 lerna run build:dep --scope=@boclips-ui/search-bar
```

To build all of the packages:

```
lerna run build:dep
```

#### AD 4. Version the component 

```
npm run version:no-push
```

#### AD 5. Publish to npm

Log in to npm (credentials can be found in LastPass - look for 'npmjs')

```
npm login
```

Do the actual publishing with:

```
npm run publish:git
```
