'use strict'
import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView,
  RefreshControl,
} from 'react-native'
import ListRow from './Listrow'
import Screen from './screen'

const defaultData =[
  {
    title: 'Lorem ipsum adipiscing',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/nature',
  },
  {
    title: 'Guim petis',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/animals',
  },
  {
    title: 'Filos be amik',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/transport',
  },
  {
    title: 'Mi a adipiscing',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/nightlife',
  },
  {
    title: 'Ching vivamus le',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/food',
  },
  {
    title: 'Parturinent my proin',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/fashion',
  },
  {
    title: 'Vestibulum in fames',
    summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
    image: 'http://lorempixel.com/g/1000/250/business',
  },
];

class Dashboard extends Component{
  constructor(props){
    super(props);
    //initial state
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isRefreshing: false,
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }
  componentDidMount = () => {
    // Fetch Data
    this._fetchData();
  }
  _fetchData(){
    this.setState({isRefreshing:true });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(defaultData),
      isRefreshing: false,
    });
  }
  _renderRow = (data) => {
    let { title, image } = data;

    return (
      <ListRow title={title.toString()}
        image={!this.props.noImages ? image : null}
        onPress={()=>{
          this.props.navigator.push({
            title: title,
            Name:Screen,
            index: 2,
            transition: 'FloatFromBottom',
          });
        }} />
    );
  }

  render(){
    return(
       <View style={[styles.container]}>
        <ListView
          initialListSize={8}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          contentContainerStyle={styles.paddingBottom} 
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._fetchData}
           />
         }
        />
      </View>
      );
  }
}
/*styles*/
const styles=StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  paddingBottom: {
    paddingBottom: 20,
  },

});
export default Dashboard

