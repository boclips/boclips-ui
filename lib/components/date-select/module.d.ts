declare module "*.module.less" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
