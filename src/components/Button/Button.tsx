import React from "react";
import styled, {ThemeProvider} from "styled-components";
// @ts-ignore
import theme from 'styled-theming';
import {Themed} from "../../constants/Theming";


/****
 * @constructor
 */


const Button = styled.button`
  background-color: ${Themed.backgroundColor};
  color: red;
`


function PrimaryButton() {
    return (
        <Button>
            Maxwell
        </Button>
    )
}

export default PrimaryButton;
