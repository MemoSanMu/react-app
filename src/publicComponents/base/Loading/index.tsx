import { FC } from 'react';
import { ClipLoader } from 'react-spinners';
import classnames from 'classnames/bind';
import styles from './index.module.less';
const cx = classnames.bind(styles);

const Loading: FC = (): any => (
  <div className={cx(['am-toast', 'am-toast-mask'])}>
    <span>
      <div className={cx('am-toast-notice-content')}>
        <div
          className={cx(['am-toast-text', 'am-toast-text-icon'])}
          role="alert"
          aria-live="assertive"
        >
          <ClipLoader color={'#108ee9'} size={30} />
          <div className={cx('am-toast-text-info')}>Loading...</div>
        </div>
      </div>
    </span>
  </div>
);

export default Loading;
