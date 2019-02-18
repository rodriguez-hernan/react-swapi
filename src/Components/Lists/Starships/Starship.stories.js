import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import StarshipList from './StarshipList';
import configureStore from '../../../Store/configureStore';

const store = configureStore();

storiesOf('Starship', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Starship List', () => <StarshipList />);