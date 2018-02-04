import {h, app} from "hyperapp";
import styles from './css/app.css';
import * as dv from './js/details-component';
import * as sv from './js/search-component';
import {state} from './js/state';
import {actions} from './js/actions';
import storage from './js/libs/storage';


const storedState =  storage.getState();
const initialState = Object.assign(state,storedState);

const mainView = (state, actions) => (
    <div className={'container ' + styles.card }>
        <h4 className={'header'}>Github Trends</h4>
        {state.activeView === 'details' ?dv.view(state, actions) : sv.view(state, actions)}
    </div>
);

app(initialState, actions, mainView, document.getElementById('root'));
