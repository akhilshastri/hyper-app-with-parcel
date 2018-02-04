import {h} from "hyperapp";
import config from './config';
import style from './search-component.css' ;


const searchItems = (itemsList, filterText,click) => {
    debugger;
    const list = filterText?itemsList.filter(i => i.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) || []: itemsList;
    return list.map(itm => {
        return <li><a onclick={()=>click(itm)}> {itm} </a></li>
    });
};

const RadioItem = ({text, key, selected}) => {
    return (
        <div>
            <input type="radio" id={"id_" + key}
                   name="trending"
                   value={key}
                   checked={selected ? true : false}>
            </input>
            <label for={"id_" + key}>{text}</label>
        </div>
    )
};

export const view = (state, actions) =>{
    let list;
    return (
    <div className={style.searchContainer}>
        <div className="row">
            <input type="text"
                   placeholder={config.searchView.placeHolder}
                   value={state.filterText}
                   oncreate={element => element.focus()}
                   oninput={e=>actions.filterSearch(e.currentTarget.value)}
            />
        </div>
        <h5>Tech and Lang List</h5>
        <div className={style.radioList}>
            <RadioItem text="To day" key="daily"></RadioItem>
            <RadioItem text="This week" key={"weekly"} selected={true}></RadioItem>
            <RadioItem text="This month" key={"monthly"}></RadioItem>
        </div>
        <ul oncreate={el=>list=el}>
            {searchItems(config.langs, state.filterText,actions.showDetails)}
        </ul>
        {/*{list?<span> Count: {list.childNodes.length}</span>:null}*/}
    </div>
)};
