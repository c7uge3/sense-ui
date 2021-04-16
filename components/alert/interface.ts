// 类型声明文件
export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>; // Record 是高级类型

export interface AlertProps {
  /**
   * 通过此处来改变 alert 的种类
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning'; // kind 为可选参数
}
