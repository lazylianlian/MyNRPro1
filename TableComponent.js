/**
 * Created by Administrator on 2017/5/15.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TableComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item,styles.center, styles.flex]}><Text style={styles.font}>酒店</Text></View>
                <View style={styles.item}>
                    <View style={[styles.center, styles.flex,styles.bottline]}><Text style={styles.font}>海外酒店</Text></View>
                    <View style={[styles.center, styles.flex]}><Text style={styles.font}>特惠酒店</Text></View>
                </View>
                <View style={styles.item}>
                    <View style={[styles.center, styles.flex,styles.bottline]}><Text style={styles.font}>团购</Text></View>
                    <View style={[styles.center, styles.flex]}><Text style={styles.font}>客栈·公寓</Text></View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        height:100,
        flexDirection: 'row',
        borderRadius:5,
        borderColor:'white',
        marginTop:5,
        marginLeft:5,
        marginRight:5,
    },
    item: {
        flex: 1,
        height: 80,
        borderColor: 'white',
        borderWidth: 0.6,
        borderRadius:5,
        backgroundColor:'#ff0067',
    },
    center: {
        justifyContent: 'center',//垂直居中，实际上是按照flexDerection的方向居中
        alignItems: 'center',//水平居中
    },
    flex: {
        flex: 1
    },
    bottline:{
        borderBottomColor:'white',
        borderBottomWidth:1,
    },
    font:{
        fontSize:14,
        fontWeight:'bold',
        color:'white',
    }

});