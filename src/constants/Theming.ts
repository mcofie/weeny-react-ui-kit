// @ts-ignore
import theme from 'styled-theming';
import {PrimaryColor} from "./Colors";


export const Themed: DefaultTheme = {
    backgroundColor: theme('mode', {
        light: PrimaryColor.light,
        dark: PrimaryColor.dark,
    }),
}

interface Theme{
 backgroundColor?: any
 textColor?: any
}

interface DefaultTheme extends Theme{

}

