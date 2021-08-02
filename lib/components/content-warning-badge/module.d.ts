declare module "*.module.less" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.svg" {
  const value: React.ComponentType<any>;
  export default value;
}
