import { createStackNavigator } from 'react-navigation'
import Videos from './videos'
import Details from './details'



export default createStackNavigator(
  {
    ['VIDEOS']: Videos,
    ['VIDEOS_DETAILS']: Details
  },
  {
    initialRouteName: 'VIDEOS',
    headerMode: 'none'
  }
)