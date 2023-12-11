declare module "*.css" {
  const styles: {
    [index: string]: string;
  };
  export = styles;
}

declare module "*.scss" {
  const styles: {
    [index: string]: string;
  };
  export = styles;
}