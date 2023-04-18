import { StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../utils/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight
    },
    button: {
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 15,
        marginLeft: 10,
        height: 50
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})