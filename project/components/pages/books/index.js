import { createStackNavigator } from 'react-navigation'
import Books from './books'
import Details from './details'



export default createStackNavigator(
  {
    ['BOOKS']: Books,
    ['BOOKS_DETAILS']: Details
  },
  {
    initialRouteName: 'BOOKS',
    headerMode: 'none'
  }
)