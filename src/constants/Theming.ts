// @ts-ignore
import theme from 'styled-theming';
import {Colors} from "./Colors";


export const Themed: DefaultTheme = {
    backgroundColor: theme('mode', Colors.primary),
    textColor: theme('mode', Colors.text)
}

interface Theme {
    backgroundColor?: any
    textColor?: any
}

interface DefaultTheme extends Theme {

}

