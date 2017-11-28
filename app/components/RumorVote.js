import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { editRumor } from '../actions/rumors';
import Icon from "react-native-vector-icons/Ionicons";

class RumorVote extends Component {
  constructor(props){
    super(props)

    this.state = {
      voted: false,
      upcolor: '#ffb6c1',
      downcolor: '#ffb6c1'
     }
  }

  _upvote(event){
    if(!this.state.voted){
      let rumor = {id : this.props.id, points : 1};
      this.props.editRumor(rumor);
      this.setState({
        voted: true,
        upcolor: 'black',
        downcolor: '#ffb6c1'
      });
    }
  }

  _downvote(event){
    if(!this.state.voted){
      let rumor = {id : this.props.id, points : 0};
      this.props.editRumor(rumor);
      this.setState({
        voted: true,
        downcolor: 'black',
        upcolor: '#ffb6c1'
      });
    }
  }

  render(){
    return(
      <View>

        <View style={styles.buttons}>
          <Button
            backgroundColor="transparent"
            icon={{name: 'ios-thumbs-up', type: 'ionicon', color: this.state.upcolor, size: 40}}
            onPress={this._upvote.bind(this)}
          />
          <Button
            backgroundColor="transparent"
            icon={{name: 'ios-thumbs-down', type: 'ionicon', color: this.state.downcolor, size: 40}}
            onPress={this._downvote.bind(this)}
          />
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    editRumor: (rumor) => {
      dispatch(editRumor(rumor));
    }
  }
}

export default connect(null, mapDispatchToProps)(RumorVote);