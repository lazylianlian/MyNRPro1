/**
 * Created by Administrator on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Header extends Component{
    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    {/*<Text>可以嵌套<Text>，可以继承样式设置*/}

                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    flex:{
        marginTop:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'black',
        alignItems:'center',//内部Text组件水平居中
        flexDirection:'row'
    },
    font:{
        flex:1,
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'//文字在组件中居中
    },
    font_1:{
        color:'#cd1d1c'
    },
    font_2:{
        color:'white',
        backgroundColor:'#cd1d1c',
        textShadowRadius:5
    }
})