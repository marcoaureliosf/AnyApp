import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      header: string;
      user: string;

      background: string;
      text: string;
    }
  }
}