import { StyleSheet } from 'react-native'
import { colors } from '../../colors'


const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
    },
    favoriteContainer: {
        width: "100%",
        height: "50%",
    },
    othersContainer: {
        width: "100%",
        height: "50%",
    },
    labelContainer: {
        flex: 1,
        height: 30,
        width: '100%',
        backgroundColor: colors.lightGray,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    label: {
        fontWeight: "bold",
        color: colors.black,
        fontSize: 16,
    },
    separator: {
        borderBottomWidth: 0.5,
        borderColor: colors.lightGray
    },
    activityIndicatorContainer:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    noContactFound: {
        width:"100%",
        fontSize: 20,
        textAlign:"center"
    }
})

export default styles