import { StyleSheet, StatusBar } from 'react-native'
import { FONT_SIZE, COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 800,
    justifyContent: 'center',
    top: -50
  },
  title: {
    fontSize: FONT_SIZE.xl,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.green1,
    width: '90%',
    height: 500,
    marginLeft: 20
  }
})
