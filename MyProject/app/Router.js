import {StackNavigator, TabNavigator} from 'react-navigation'
import State from './components/State'
import Props from './components/Props'
import Schedule from './components/Schedule'

export const Tab =TabNavigator({
	Schedule:{
		screen : Schedule
	},
	Props:{
		screen : Props
	}
})

export const Stack = StackNavigator({
	State: {
		screen : State,
		navigationOptions: () => ({
	      header : null
	    })
	},
	Tab : {
		screen : Tab,
		navigationOptions: () => ({
	      header : null
	    })
	}
})