import * as React from 'react';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';

import classNames from 'classnames/bind';
import styles from './index.module.less';

const cx = classNames.bind(styles);

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}
const Item = ({ num, index }: any) => (
  <div className={cx('item')}>
    <div className={cx('item-content')}>
      <div className={cx('thumbnail')}>
        <img
          src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
            (num % 33) + 1
          }.jpg`}
          alt="egjs"
        />
      </div>
      <h6 className={cx('title')}>
        title-[InfiniteGrid]-瀑布流布局上拉滚动无限虚拟列表{++index}
      </h6>
      <p className={cx('info')}> info - 上拉滚动无限虚拟列表 {++index}</p>
      <p className={cx('info')}> info - 上拉滚动无限虚拟列表 {++index}</p>
    </div>
  </div>
);

export default function App() {
  const [items, setItems] = React.useState(() => getItems(0, 10));

  return (
    <div className={cx('wrapper')}>
      <MasonryInfiniteGrid
        className={cx('container')}
        container={true}
        loading={<div className={cx('loading')}>Loading...</div>}
        onRequestAppend={(e) => {
          const nextGroupKey = (+e.groupKey! || 0) + 1;
          console.log(e, '请求');

          e.wait();

          setTimeout(() => {
            e.ready();
            setItems([...items, ...getItems(nextGroupKey, 10)]);
          }, 1000);
        }}
      >
        {items.map((item, index) => (
          <Item
            data-grid-groupkey={item.groupKey}
            key={item.key}
            num={item.key}
            index={index}
          />
        ))}
      </MasonryInfiniteGrid>
    </div>
  );
}
