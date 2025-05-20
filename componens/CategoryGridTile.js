import{ View, Pressble, Text, StleSheet, Platform} from "react-native";

function CategoryGridTile({title, color, onPress}){
    return(
        <View style={[StyleSheet.gridItem, { backgroundColor: color}]}>
            <Pressble android_ripple={{color: '#ccc'}}
            style={({pressed}) => [style.button, pressed ? StyleSheet.buttonPressed:null,]}
            onPress={onPress}>
                <View  style={styles.innerContainer}>
                    <Text styles={ styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressble>
        </View>
    )
}

const style = StyleSheet.create ({
    gridItem:{
        flex: 1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor: 'white',
        shadowColor:' black',
        shodowOpacity:0.25,
        showdowOffset:{width: 0, height: 2},
        shodowRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent: 'center',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    }

})
export default CategoryGridTile;