import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import { getStatusBarHeight } from 'react-native-status-bar-height';
import moment from 'moment';

import images from '../constants/images';

const App = () => {

  const [userName, setUserName] = useState('');
  const [userRepos, setUseRepos] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const fetching = async () => {
    setLoading(true)
    setMessage(false)


    await fetch(`https://api.github.com/users/${userName}`)
      .then(async (response) => {
        const data = await response.json();
        console.log('response', data);
        if (data.message == "Not Found") {
          setMessage(true)
        }
        else {
          setUserData(data);
        }
      })

      .catch((error) => {
        console.error(error);
      });
    await fetch(`https://api.github.com/users/${userName}/repos`)
      .then(async (response) => {
        const data = await response.json();
        if (data.message == "Not Found") {
          setMessage(true)
        }
        else {
          setUseRepos(data);
          setLoading(false)
        }
      })

      .catch((error) => {
        console.error(error);
      });


  };
  useEffect(() => {
    SplashScreen.hide()

  }, [])

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
            <TouchableOpacity onPress={fetching}>
              <Image resizeMode='contain' style={{ height: 20, width: 20, marginLeft: 15, marginRight: 10, tintColor: '#D1D1D1' }} source={images.search} />
            </TouchableOpacity>
            <TextInput
              style={{
                fontSize: 16,
                flexGrow: 1
              }}
              placeholder="Search Users..."
              placeholderTextColor='grey'
              value={userName}
              onChangeText={(value) => {
                setUserName(value)
              }}
            />
          </View>
          {!message ? (!loading ?
            (
              <View>
                <View style={{ flexDirection: 'row', marginHorizontal: 25 }}>
                  <Image style={{ borderColor: 'grey', height: 80, width: 80, borderRadius: 8, }} source={{ uri: userData.avatar_url }} />
                  <View style={{ flex: 0.95, flexDirection: 'column', marginLeft: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                      {userData.login}
                    </Text>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 14, color: 'grey' }}>
                      {userData.location}
                    </Text>
                  </View>
                </View>
                {userRepos.length > 0 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', marginHorizontal: 25, marginTop: 25 }}>
                  {userRepos.length} Repositries
              </Text>}
                {
                  userRepos.map((data, index) => {
                    var style = {}
                    if (index == userRepos.length - 1) {
                      style = { marginBottom: 30 }
                    }
                    return (
                      <TouchableOpacity key={index} onPress={() => {
                        Linking.openURL(`https://github.com/${userName}/${data.name}`);
                      }} style={[style, { marginHorizontal: 25, marginTop: 30, borderWidth: 1, borderColor: 'grey', borderRadius: 8 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginVertical: 10, justifyContent: 'space-between' }}>
                          <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'grey', fontSize: 13 }}>
                              {moment(data.created_at).format('dddd').slice(0, 3)}
                            </Text>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{moment(data.created_at).format('Do')}
                            </Text>
                            <Text style={{ color: 'blue', fontSize: 16 }}> {moment(data.created_at).format('MMMM').slice(0, 3)}
                            </Text>
                          </View>
                          <View style={{ borderWidth: 0.3, height: 50, backgroundColor: 'grey', width: 0.4, marginHorizontal: 15 }} />
                          <View style={{ flex: 0.9 }}>
                            <Text numberOfLines={4} style={{ fontSize: 20, fontWeight: 'bold' }}>
                              {data.name}
                            </Text>

                            {data.description &&
                              <View style={{ marginTop: 10, }}>
                                <Text ellipsizeMode='tail' numberOfLines={5} style={{ fontSize: 15, fontWeight: 'bold' }}>
                                  Description
                    </Text>
                                <Text style={{ color: 'grey' }}>
                                  {data.description}
                                </Text>
                              </View>
                            }
                          </View>
                          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image resizeMode='contain' style={{ height: 20, width: 20, marginLeft: 15, marginRight: 10, tintColor: data.stargazers_count == 0 ? '#D1D1D1' : 'grey' }} source={images.star} />
                            <Text style={{ paddingLeft: 6, marginTop: 3, textAlign: 'center', fontSize: 10, color: '#000' }}>
                              {data.stargazers_count}
                            </Text>
                          </View>
                        </View>



                        {data.language && <View style={{ flex: 0.8, flexDirection: 'column', marginBottom: 10 }}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: 40 }} />

                              <Text style={{ fontSize: 13, color: '#000', marginLeft: 7 }}>
                                {data.language}
                              </Text>
                            </View>
                            <Text style={{ marginHorizontal: 15, color: 'grey' }}>
                              Updated on  {moment(data.updated_date).format('LL')}
                            </Text>
                          </View>

                        </View>}
                      </TouchableOpacity>


                    )
                  })
                }
              </View>
            )
            :
            (<View style={{ height: 200, flexDirection: 'column', justifyContent: 'center' }}>
              <ActivityIndicator color='black' size={'large'} />
            </View>)) : <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'black' }}>User not found</Text></View>}
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
