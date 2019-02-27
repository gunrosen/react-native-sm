import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from '../components/common';
import { connect } from 'react-redux';
import { loginFirebase } from '../actions';

class Login extends Component {
      constructor(props) {
          super(props);
          this.state = {
              isLoading: false,
              email: '',
              password: '',
              error:''
          }
      }

      componentWillReceiveProps(props) {
            let { user, error } = props;
            this.setState({isLoading: false});
            if (user) {

            }
            if(error){
              this.setState({error:error.message});
            }
      }
      _onEmailTextChange(email){
          this.setState({email});
      }

      _onPasswordTextChange(password){
          this.setState({password});
      }

      _onLoginButtonPress(){
          const { email, password } = this.state;
          this.setState({error: '', isLoading: true},
           () => {
              this.props.loginFirebase({ email, password});
          });

      }

      _renderButton(){
          if(this.state.isLoading){
              return <Spinner size="small" />
          }
          return <Button onPress={this._onLoginButtonPress.bind(this)} text='Log in'/>
      }

      render(){

        return (
          <View style={{flex:1, alignItems: 'stretch'}}>
              <View>
                    <Image style={styles.imageStyle} source={require('../img/logo.png')}/>
              </View>
              <Card style={styles.cardStyle}>
                  <CardSection>
                      <Input  label = "Email"
                              placeholder="user@gmail.com"
                              value = {this.state.email}
                              onChangeText={ this._onEmailTextChange.bind(this)}
                      />
                  </CardSection>
                  <CardSection>
                      <Input  secureTextEntry
                              label = "Password"
                              placeholder="Password"
                              value = {this.state.password}
                              onChangeText={ this._onPasswordTextChange.bind(this)}
                      />
                  </CardSection>
                  <Text style={styles.errorStyle}>
                       {this.state.error}
                  </Text>
                  <CardSection>
                      {this._renderButton()}
                  </CardSection>
              </Card>
              <View style={{  flex:1, alignItems: 'center', justifyContent: 'flex-end',marginBottom: 5}}>
                  <Text>Copyright © 2019 Blueship Vietnam</Text>
              </View>
          </View>
        );
      }
}

const styles = {
    errorStyle : {
      color:'red',
      fontSize:14,
      alignSelf:'center',
      paddingTop:5,
      paddingBottom:5
    },
    imageStyle:{
      width: 160,
      height:160,
      marginTop:50,
      marginBottom:20,
      alignSelf:'center'
    },
    cardStyle:{

    }
};

function mapStateToProps({ login }) {
    const { error, user } = login;
    return { error, user };
};
export default connect(mapStateToProps, { loginFirebase } )(Login);
