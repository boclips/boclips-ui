# For detailed lerna guide check our slab:

https://boclips.slab.com/posts/boclips-ui-guide-lerna-npm-storybook-am6l9qvt

## First run

### 1. Install all the packages from the root package.json:
```
npm i
```


### 2. Bootstrap lerna

```
lerna bootstrap
```

### 3. Build the components

```
npx lerna run build
```

### 4. Run storybook

```
npm run storybook
```

The storybook should be accessible at http://localhost:6006/ 

## Development process:

1. Do the code changes
1. Build the component
1. Commit the changes
1. Version the component `npm run version` and then CI will publish your changes to the world

### Building a component

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

### Forcing a version bump

It sometimes may happen that you need to update and publish a component's version without introducing any code changes.

For example, you previously published your components as development versions, and now you only want to promote them to production versions.

#### Bumping all components

There's an NPM script that will force a version bump for all the components:

```
npm run force-version-bump
```

#### Bumping specific components

You can also bump a single component only in a similar manner, for example:

```
npm run force-version-bump:component @boclips-ui/button
```

Or a bunch of them by comma separating the names:

```
npm run force-version-bump:component @boclips-ui/button,@boclips-ui/tooltip
```
