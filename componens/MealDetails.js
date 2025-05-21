import{View, Text, StylesSheet} from 'react-native';

function MealDetails({duration, complexity, affordability}){
    return(
        <View styles={StylesSheet.details}>
            <Text styles={styles.detailsItem}></Text>
            <Text styles={styles.detailsItem}>{complexity.toUpperCase()}</Text>
            <Text styles={styles.detailsItem}>{affordability.toUpperCase()}</Text>
             </View>
    )
}

export default MealDetails
 
const styles= StylesSheet.create({
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        morginHorizontal:4,
    fontSize:12
    }
})