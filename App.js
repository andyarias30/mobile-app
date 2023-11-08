import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import PostCard from './components/PostCard';

export default function App() {
  const [blogPost, setBlogPost] = useState([])
  // useeffect is being called on different lifecycles of the components
  //1. When components Mounts
  //2. when components unMounts

  useEffect(() => {
    fetch('http://192.168.10.98:8080')
      .then(res => res.json())
      .then(data => setBlogPost(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <ScrollView>
        {blogPost.map((singlePost, index) => {
          return(
            <PostCard singlePost={singlePost} index={index} key={singlePost._id} />
          )
        })}
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      // display: 'flex',
      // height: '100%',
      // width: '400',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
