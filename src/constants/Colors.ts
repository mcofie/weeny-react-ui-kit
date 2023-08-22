// @ts-ignore

/***
 * All Colors
 */
export enum ColorTokens {
    //Primary Color
    NAVY_900 = '#040516',
    NAVY_800 = '#0c0e41',
    NAVY_700 = '#14176c',
    NAVY_600 = '#1c2097',
    NAVY_500 = '#2429c2',
    NAVY_400 = '#3d43db',
    NAVY_300 = '#686de3',
    NAVY_200 = '#9396eb',
    NAVY_100 = '#bec0f3',
    NAVY_50 = '#e9eafb',

    //Secondary
    BLUE_900 = '#040516',
    BLUE_800 = '#0c0e41',
    BLUE_700 = '#14176c',
    BLUE_600 = '#1c2097',
    BLUE_500 = '#2429c2',
    BLUE_400 = '#3d43db',
    BLUE_300 = '#686de3',
    BLUE_200 = '#9396eb',
    BLUE_100 = '#bec0f3',
    BLUE_50 = '#e9eafb',


    //Accent Color
    YELLOW_900 = '#1a1200',
    YELLOW_800 = '#4d3600',
    YELLOW_700 = '#805a00',
    YELLOW_600 = '#b37e00',
    YELLOW_500 = '#e6a200',
    YELLOW_400 = '#ffbc1a',
    YELLOW_300 = '#ffcb4d',
    YELLOW_200 = '#ffda80',
    YELLOW_100 = '#ffe9b3',
    YELLOW_50 = '#fff8e5'
}


// @ts-ignore
//App Color
interface AppColors {
    dark: string,
    light: string
}

/**
 * Light Colors
 */
//Specify the light mode colors according to the theme
const lightColors = {
    name: 'light-colors',
    data: {
        primary: ColorTokens.NAVY_500,
        secondary: ColorTokens.BLUE_400,
        accent: '',
        neutral: '',
        background: '',
        text: '',
        border: '',
        success: '',
        warning: '',
        error: '',
    }
}


/**
 * Dark Colors
 */
//Specify the dark mode colors according to the theme

const darkColors = {
    name: 'dark-colors',
    data: {
        primary: ColorTokens.NAVY_300,
        secondary: ColorTokens.BLUE_700,
        accent: '',
        neutral: '',
        background: '',
        text: '',
        border: '',
        success: '',
        warning: '',
        error: '',
    }
}


const PrimaryColor: AppColors = {
    light: lightColors.data.primary,
    dark: darkColors.data.primary
};

const TextColor: AppColors = {
    light: lightColors.data.text,
    dark: darkColors.data.text
}

export const Colors = {
    primary: PrimaryColor,
    text: TextColor
}


