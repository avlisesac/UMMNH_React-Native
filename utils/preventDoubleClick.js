import React from 'react'
import debounce from 'lodash.debounce'

const preventDoubleClick = (WrappedComponent) => {
	class PreventDoubleClick extends React.Component {
		debouncedOnPress = () => {
			this.props.onPress && this.props.onPress()
		}

		onPress = debounce(this.debouncedOnPress, 500, { leading: true, trailing: false })

		render() {
			return <WrappedComponent { ...this.props } onPress = { this.onPress } />
		}
	}

	PreventDoubleClick.displayName = `preventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`

	return PreventDoubleClick
}

export default preventDoubleClick