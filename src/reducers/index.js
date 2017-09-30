import { combineReducers } from 'redux';
import HeroReducer from './HeroReducer.js';
import SelectedHeroReducer from './SelectedHeroReducer.js';

const rootReducer = combineReducers({
  heroes: HeroReducer,
  selectedHero: SelectedHeroReducer
});

export default rootReducer;
