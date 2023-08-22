// @ts-ignore

//In multiples of 4
static const defaultSizes: Array = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52]


//Margin, Padding, Size, Space, Radius
enum DimenTokens {
    SPACES
}

//Base dimensions
export const Dimens = {
    size: {
        small: defaultSizes[0],
        medium: defaultSizes[1],
        large: defaultSizes[2],
        xlarge: defaultSizes[3],
        xxlarge: defaultSizes[4]
    },
    padding: {
        small: defaultSizes[0],
        medium: defaultSizes[1],
        large: defaultSizes[2],
        xlarge: defaultSizes[3],
        xxlarge: defaultSizes[4]
    },
    space: {
        small: defaultSizes[0],
        medium: defaultSizes[1],
        large: defaultSizes[2],
        xlarge: defaultSizes[3],
        xxlarge: defaultSizes[4]
    },
    margin: {
        small: defaultSizes[0],
        medium: defaultSizes[1],
        large: defaultSizes[2],
        xlarge: defaultSizes[3],
        xxlarge: defaultSizes[4]
    },
    radius: {
        small: defaultSizes[0],
        medium: defaultSizes[1],
        large: defaultSizes[2],
        xlarge: defaultSizes[3],
        full: defaultSizes[4]
    }

}
