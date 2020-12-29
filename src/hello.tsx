import {observer} from 'mobx-react';
import React, {FC, useState} from 'react'
import {MobxCounter} from './MobxCounter';

export const Hello: FC = () => {
  const [count, setCount] = useState(0);

  return <div>
    <button onClick={() => setCount(n => n + 1)}>+1</button>
    <div><MobxCounter count={count}/></div>
  </div>
}

export default observer(Hello)
