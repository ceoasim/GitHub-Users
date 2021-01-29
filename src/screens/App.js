import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import images from '../constants/images';

const App = () => {

  const array = [
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: '1',
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
    {
      repo_name: '10DAYSOFXAMARINE',
      Stars: 0,
      language: 'C#',
      updated_date: '3/11/2009',
    },
  ]
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <View style={{
          marginTop:
            StatusBar.currentHeight + getStatusBarHeight(true) + 25,
        }}>
          <Text style={{ marginHorizontal: 25, fontSize: 25, fontWeight: 'bold' }}>
            Github Users
          </Text>
          <View style={{ marginHorizontal: 25, marginVertical: 25, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, borderColor: '#D1D1D1', backgroundColor: '#F4F4F4', height: 40 }}>
            <Image resizeMode='contain' style={{ height: 20, width: 20, marginLeft: 15, marginRight: 10, tintColor: '#D1D1D1' }} source={images.search} />
            <TextInput
              style={{
                fontSize: 16,
              }}
              placeholder="Search Users..."
              placeholderTextColor='grey'
            // value={this.state.emailId}
            // onChangeText={(value) => {
            //   this.setState({ emailId: value });
            // }}
            />
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 25 }}>
            <Image style={{ height: 80, width: 80, borderRadius: 8, tintColor: 'grey' }} source={images.profile_picture} />
            <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 5 }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                Azeem Chaudary
              </Text>
              <Text style={{ fontSize: 14, color: 'grey' }}>
                United Arab Emirates
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', marginHorizontal: 25, marginTop: 25 }}>
            {array.length} Repositries
              </Text>
          {
            array.map((data, index) => {

              return (
                <View key={index} style={{
                  marginHorizontal: 25, marginTop: 15, justifyContent: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#C7C7C7', backgroundColor: '#F4F4F4', height: 'auto',
                }}>
                  <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image resizeMode='contain' style={{ height: 20, width: 20, marginLeft: 15, marginRight: 10, tintColor: '#D1D1D1' }} source={images.search} />
                    <Text style={{color:'#000', fontSize:14}}>
                      {data.repo_name}
                    </Text>
                  </View>
                  <View style={{ marginLeft: 30, marginTop: 25, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image resizeMode='contain' style={{ height: 20, width: 20, marginLeft: 15, marginRight: 10, tintColor: '#D1D1D1' }} source={images.star} />
                      <Text style={{ fontSize: 13, color: '#000' }}>
                        {data.star}1
                  </Text>
                      <View style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: 40, marginLeft: 15 }} />
                      <Text style={{ fontSize: 13, color: '#000', marginLeft: 7 }}>
                        {data.language}
                      </Text>
                    </View>
                    <Text style={{ marginHorizontal: 15, color: 'grey' }}>
                      Updated on  {data.updated_date}
                    </Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

});

export default App;
