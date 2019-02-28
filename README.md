# react-native-sm
React native project

Basic React concepts:
+ JSX: lets you write your markup language inside code
+ Components
+ state
+ props
+ state container: Redux, Mobx
+ Design layout: Flexbox css
Flex, flexDirection, justifyContent,alignItems

React native specific stuff:
+ debug tool: npm install -g react-devtools
+ Make sample: react-native init AwesomeProject
+ Run: 
react-native run-android
react-native link react-native-gesture-handler
+ Debug with chrome:
http://localhost:8081/debugger-ui/
You can also use the ⌘D keyboard shortcut when your app is running in the iOS Simulator, or ⌘M when running in an Android emulator on Mac OS and Ctrl+M on Windows and Linux.
+ Debug with tool:
react-devtools
+ Redux: npm install --save redux react-redux 
action => Reducer => state 
(Reducer + state ) in store.
return brand new object in Reducer

connect = action Creator
action(type,payload) is an object
but in async we use thunk and action creator must return a function and the function will be called with dispatch
+Clear cache
		# NPM
		watchman watch-del-all
		npm cache clean

		# Android, if you encounter `com.android.dex.DexException: Multiple dex files define Landroid/support/v7/appcompat/R$anim`, then clear build folder.
		cd android
		./gradlew clean
		cd ..




