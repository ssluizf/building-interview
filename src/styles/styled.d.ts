import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            building_primary: string;
            building_secondary: string;

            sky: string;
        }
    }
}