import { StyleSheet } from 'react-native'
import { colors } from '../../colors'

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderTopWidth: 0.5,
        borderColor: colors.gray,
        backgroundColor:colors.white
    },
    label: {
        fontSize: 15,
        paddingBottom: 3
    },
    valueContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    value: {
        fontSize: 15,
        color: colors.black,
        fontWeight: "bold",
        width: "50%"
    },
    extra: {

    }
})