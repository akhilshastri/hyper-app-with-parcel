import {h} from "hyperapp";

const SearchList=(props)=>{
    debugger;
    return (
        <div {...props}> SearchList</div>
    )
};

export const view =  (state, actions) => (
    <div  >
        <SearchList  prop="valu1"></SearchList>
        {state.searchResult}
        <a
           onclick={actions.showSearch} oncreate={ actions.onSearchLoad}> back</a>

    </div>
);
