import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import FilmList from './FilmList';
import configureStore from '../../../Store/configureStore';

const store = configureStore();

storiesOf('Films', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Film List', () => <FilmList />);