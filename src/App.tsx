import React from 'react';
import classnames from 'classnames/bind'
import styles from '@/style/index.module.less'

const cx = classnames.bind(styles)

function App () {

  return (
    <div className={cx('app-container')}>
      <div>
          this is react app
      </div>
    </div>
  );
}

export default App;
