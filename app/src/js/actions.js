import axios from 'axios';
import parser from './parser/trendgins' ;



export const actions = {
    down: value => state => ({ count: state.count - value }),
    up: value => state => ({ count: state.count + value }),

    filterSearch:value=>state=>{
        debugger;
        return{...state, filterText:value}
    },
    showDetails:value=>state=>{
            debugger;
            return {...state, activeView:'details',technology:value} ;
    },
    showSearch:value=>state=>{
            return {...state, activeView:'search'} ;
    },

    showSearchResult:value=>state=>{
        return {...state, searchResult:value} ;

    },

    onSearchLoad:value=>(state,act)=>{
        debugger;
        axios.get('/trending?since=weekly').then(resp=> {
            // let searchResult = parser(resp.data);
            let searchResult = resp.data;
            console.log(searchResult);

            act.showSearchResult(searchResult);
            debugger;
            }
        );
    }

};

