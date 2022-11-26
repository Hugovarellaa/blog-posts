import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Welcome } from '../pages/Welcome';

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {
  return (
    <Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
