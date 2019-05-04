import "styled-components";

declare module "styled-components" {
  // tslint:disable-next-line
  export interface DefaultTheme {
    color: {
      grey: {
        dark: string;
        light: string;
      };
      primary: {
        base: string;
        dark: string;
        light: string;
        text: string;
      };
      secondary: {
        base: string;
        dark: string;
        light: string;
        text: string;
      };
    };
  }
}
