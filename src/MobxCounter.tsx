import {observer} from 'mobx-react';
import React, {FC} from 'react';

type Props = {
  count: number
}

export const MobxCounter: FC<Props> = observer(({count}) => {
  return <div>Mobx observer component: {count}</div>;
})
