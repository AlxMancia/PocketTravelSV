

import {Modal, Dimensions, TouchableWithoutFeedback, TouchableOpacity,
    StyleSheet, View, Text, FlatList, Image} from "react-native"
import React from "react"
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
//import Modal from "react-native-modal";

const deviceHeight= Dimensions.get("window").height
const MIN_HEIGHT = 100;
const MAX_HEIGHT = 200;
export class Popup extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            show: false
        }
    }

    show= () => {
        this.setState({show: true})
    }

    close= () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch){
        const view = <View style={{flex: 1, width: '100%'}}/>
        if(!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>

        )
    
    
    }

    renderImage= () => {
        //const {title}= this.props
        return(
           
            <ImageHeaderScrollView  maxHeight={MAX_HEIGHT} minHeight={MIN_HEIGHT} headerImage={require("../assets/images/bar2.jpg")}
      
      >
    
            </ImageHeaderScrollView>
         
        )
    }    

    renderTitle= () => {
        const {title}= this.props
        return(
            <View style={{
                alignItems: 'center'
            }}>
            <Text style={{
            color: '#182E44',
            fontSize: 25,
            fontWeight: '500',
            marginTop: 15,
            marginBottom: 30
            }}>
                {title}
            </Text>
        </View>
        )
    }

    renderContent= () => {
        const {data}= this.props
        return(
            <View>
            <FlatList 
            style={{marginBottom: 100}}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={this.renderItem}
            extraData={data}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            contentContainerStyle={{paddingBottom: 40}}
            />
    
        </View>
        )
    }

    renderItem= ({item}) => {
        return (
            <View style={{
                height: 50,
                flex: 1, 
                alignItems: 'flex-start', 
                justifyContent: 'center',
                marginLeft: 10
            }}>
                <Text style={{
                    fontSize:18,
                    fontWeight: 'normal',
                    color: '#182E44'
                }}>{item.name}</Text>
            </View>
        )
    }
    renderSeparator= ({}) => {
        return (
            <View style={{
                opacity: 0.1,
                backgroundColor: '#182E44',
                height: 1
            }}>
               
            </View>
        )
    }

    render() {
        let {show} = this.state
        const {onTouchOutside, title}= this.props

        return (
            <Modal
            animationType={'fade'}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
            >
                <View style={{flex:1, 
                backgroundColor: '#000000AA', 
                justifyContent: 'center'}}>

                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        minHeight: deviceHeight * 0.9
                        //maxHeight: deviceHeight * 0.4
                    }}>
                    
                    {this.renderImage()}
                    {this.renderTitle()}
                    {this.renderContent()}
                    </View>


                </View>
            </Modal>
        )
    }
}
