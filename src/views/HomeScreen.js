import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider }  from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Text } from 'react-native';

import { switchTheme } from '../redux/themeActions'
import { lightTheme, darkTheme } from "./Theme";

import { routes } from '../constants';


const Container = styled.View`
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
const TextContainer = styled.View`
        border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR};
        padding: 16px;
        border-radius: 6px;
`;
const text = styled.Text`
        color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
        font-size: 24px;
        font-weight: 600;
`;
const Button = styled.TouchableOpacity`
        margin: 32px 0;
        background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
        padding: 16px 32px;
        border-radius: 6px;
`;
const ButtonText = styled.Text`
    font-size: 15px
    font-weight: 500;
    color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`;



export const HomeScreen = ({}) => {
    const theme = useSelector((state) => state.themeReducer.theme);
    const dispatch = useDispatch();

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle={theme.STATUS_BAR_STYLE}/>
            <Container>
                <TextContainer>
                    <Text>Welcome to ThemeSwitcher</Text>
                </TextContainer>

                {theme.mode === 'light' ? (
                    <Button onPress={() => dispatch(switchTheme(darkTheme))}>
                        <ButtonText>Change to Dark Theme </ButtonText>
                    </Button>
                ) : (
                        <Button onPress={() => dispatch(switchTheme(lightTheme))}>
                            <ButtonText>Change to Light Theme </ButtonText>
                        </Button>

                    )}
            </Container>
        </ThemeProvider>
        
    );
}
