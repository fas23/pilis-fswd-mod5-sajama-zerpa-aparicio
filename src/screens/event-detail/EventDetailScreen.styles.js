import { StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: StatusBar.currentHeight
    },
    textContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    price: {
        fontSize: 20,
        color: '#444',
        marginBottom: 5
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
        marginTop: 10
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'cover'
    },
    map: {
        height: 250,
        marginVertical: 20,
        borderRadius: 10
    },
    webButton: {
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: 100,
        marginTop: 10
    }
})
