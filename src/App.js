import 'react-native-gesture-handler'
import React from 'react'
import { 
  Animated, 
  StatusBar, 
  StyleSheet
} from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { themeColors } from './config/themeColors'
import DefaultRoutes from './routes/DefaultRoutes'

const splashLogo = require('../assets/splash-icon.png')

const App = () => {

  const [isSplashVisible , setIsSplashVisible] = React.useState(true)
  const [loadSplashLogo , setLoadSplashLogo] = React.useState(false)
  const opacity = React.useRef(new Animated.Value(1))

  const init = async () => {
    try {
      await RNBootSplash.hide()

      Animated
      .timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 100,
        delay: 200,
      })
      .start(() => {
        setIsSplashVisible(false)
      })
    } catch (error) {
      setIsSplashVisible(false)
    }
  }

  React.useEffect(() => {
    loadSplashLogo && init()
  }, [loadSplashLogo])

  const loading = (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        tw`flex-1 justify-center items-center bg-[${themeColors.bg}]`,
        { opacity: opacity.current }
      ]}
    >
      <Animated.Image 
        source={splashLogo}
        fadeDuration={0}
        resizeMode='contain'
        onLoadEnd={() => setLoadSplashLogo(true)}
        style={[
          tw`w-[100px] h-[100px]`,
          { opacity: opacity.current }
        ]}
      />
    </Animated.View>
  )

  return (
    <SafeAreaProvider style={tw`flex-1 bg-[${themeColors.bg}]`}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={themeColors.bg}
      />
      <DefaultRoutes isSplashVisible={isSplashVisible} >
        {loading}
      </DefaultRoutes>
    </SafeAreaProvider>
  )
}

export default App