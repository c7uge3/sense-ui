// 源文件
import React from 'react';
import PropTypes from 'prop-types';

import type { AlertProps, KindMap } from './interface';

const prefixCls = 'sense-alert';

// 为 KindMap 中的类型添加相应的颜色
const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

// DOM 组装
const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

// 类型检查
Alert.propTypes = {
  kind: PropTypes.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;