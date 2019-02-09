import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CodeInput from 'react-native-confirmation-code-input';

const {height,width} = Dimensions.get('window');


class Search extends Component{

	constructor(props){
		super(props);
		this.state={date: ''};

	}

	static navigationOptions = {
		header: null
	}

	fetchImages = () => {
		fetch('http://172.20.10.7:8000/timeSlicedImages')
		.then(res => res.json())
		.then(resJson => {
			console.debug(resJson);
		})
		this.props.navigation.navigate('SearchDisplay')
	}

	render(){

		return(

					<ScrollView style={styles.mainContainer}>
						<View style={styles.header}>
							<TouchableOpacity onPress={() => {
	    					this.props.navigation.goBack()}}>
								<FontAwesome name="angle-left" size={50} color={'#05c49f'}/>
							</TouchableOpacity>
							<Text style={styles.headerText}>CroMdev</Text>
						</View>
						<View style={styles.body}>
							 <Text style={styles.bodyText}>Enter Date</Text>
							 <CodeInput
						      ref="codeInputRef1"
						      //secureTextEntry
						      codeLength={6}
						      className={'border-b'}
						      space={6}
						      size={50}
						      inputPosition='left'
						      activeColor='#05c49f'
	      					  inactiveColor='#05c49f'
	      					  onChangeText={(date) => this.setState({date})}
						      //onFulfill={(code) => this._onFulfill(code)}
						    />
						    {console.log('hey')}
						     <Text style={styles.bodyText}>Time Range</Text>
							 <CodeInput
						      ref="codeInputRef1"
						      //secureTextEntry
						      codeLength={4}
						      className={'border-b'}
						      space={4}
						      size={50}
						      inputPosition='left'
						      activeColor='#05c49f'
	      					  inactiveColor='#05c49f'
	      					  onChangeText={(date) => this.setState({date})}
						      onFulfill={(code) => this._onFulfill(code)}
						    />

						    <Text style={styles.bodyText}>To</Text>
							 <CodeInput
						      ref="codeInputRef1"
						      //secureTextEntry
						      codeLength={4}
						      className={'border-b'}
						      space={4}
						      size={50}
						      inputPosition='left'
						      activeColor='#05c49f'
	      					  inactiveColor='#05c49f'
	      					  onChangeText={(date) => this.setState({date})}
						      onFulfill={(code) => this._onFulfill(code)}
						    />
						    <TouchableOpacity style={styles.searchButton} 
						    onPress={this.fetchImages}>
						    	<Text style={styles.buttonText}>Search</Text> 
						    </TouchableOpacity>
						</View>
					</ScrollView>

			);
	}
}

export default Search;

const styles = StyleSheet.create({

	mainContainer:{
		flex:1,
	},

	header:{
		paddingHorizontal:20,
		height:height*0.2,
		backgroundColor:'#051934',
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row',
		justifyContent:'space-between',
	},

	headerText:{
		fontSize:50,
		//fontFamily: 'sans-serif',
		textAlign:'center',
		color:'#05c49f', 
		paddingRight:50,	
	},

	body:{
		//flex:1,
		height:height*0.8,
		backgroundColor:'#030f1f',
		alignItems:'center',
		justifyContent:'center',
		paddingVertical:40,
	},

	bodyText:{
		textAlign:'center',
		fontSize:50,
		color:'#05c49f',
	},

	searchButton:{
		paddingVertical:2,
		paddingHorizontal:10,
		borderRadius: 30,
    	borderWidth: 4,
		borderColor:'#05c49f',
		backgroundColor:'#030E20',
	},

	buttonText:{
		textAlign:'center',
		color:'#05c49f', 
		fontSize:35,
	}

});