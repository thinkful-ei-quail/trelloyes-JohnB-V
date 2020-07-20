import React from 'react';
import List from "./List";


function App(props) {

  let list = props.store.lists.map(function(list) {
    return <List key={list.id} header={list.header} cardIds={list.cardIds} allCards={props.store.allCards} />
  })

  return (
    <main className='App'>
      <header>
        <h1>Trelloyes!</h1>
        <div className='App-list'>{list}</div>
      </header>
    </main>
  );
}

export default App;