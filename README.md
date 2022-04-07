# For detailed lerna guide check our slab:

https://boclips.slab.com/posts/boclips-ui-guide-lerna-npm-storybook-am6l9qvt

## First run
#### 1. Install all the packages from the root package.json:
```
npm i
```


#### 2. Bootstrap lerna

```
lerna bootstrap
```

#### 3. Run storybook

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