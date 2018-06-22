import React, {Component} from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import Icon from 'react-icons-kit'
import {tag} from 'react-icons-kit/iconic/tag'

const MapWrapper = styled.div`
    height: 100%;
    width: 100%;
`

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 51.367550,
            lng: 0.519160
        },
        zoom: 12
    }

    render() {
        return(
            <MapWrapper>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDhvqDSK9LpLQhTt4x7_N0SMvldbA1GqyM' }}
                defaultCenter={ this.props.center }
                defaultZoom={ this.props.zoom }>
                <Icon
                    size={40}
                    icon={ tag }
                    lat={ 51.367550 }
                    lng={ 0.519160 }
                    />
                </GoogleMapReact>
            </MapWrapper>
        )
    }
}

export default Map