import React , {Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import {Motion, spring} from 'react-motion';

import {
    Typography,
    Container,
} from '@material-ui/core';

const FadeElement = ({children, partialVisibility=true , stiffness=200, damping=40}) => (
    <VisibilitySensor partialVisibility={partialVisibility}>
            {({isVisible}) =>
                <Motion style={{currentOpacity: spring(isVisible ? 1 : 0, { stiffness: stiffness, damping: damping })}}>
                    {({currentOpacity}) =>
                        <Container style={{opacity: currentOpacity}}>
                            {children}
                        </Container>
                    }
                </Motion>
            }
    </VisibilitySensor>);

export default FadeElement