import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import CharacterList from './CharacterList';
import configureStore from '../../../Store/configureStore';

const store = configureStore();

storiesOf('Characters', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Character List', () => <CharacterList />);