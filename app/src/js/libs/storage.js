
import {h} from "hyperapp";


const db = window.localStorage || {
    getItem: name => null,
    setItem: (name, value) => null,
};

export default {
    getState(){
       const keyVal =   db.getItem('state') || '{}';
       return JSON.parse(keyVal);
    },
    setState(val){
        db.setItem('state', JSON.stringify(val) || "{}");
    }
}
