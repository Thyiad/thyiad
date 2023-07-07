/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Feature0 from './Feature0';
import Footer0 from './Footer0';

import { Feature00DataSource, Footer00DataSource } from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port, // 如果不是 dva 2.0 请删除
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
        // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
        /* 如果不是 dva 2.0 请删除 start */
        if (location.port) {
            // 样式 build 时间在 200-300ms 之间;
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
        /* 如果不是 dva 2.0 请删除 end */
    }

    render() {
        const children = [
            <Feature0
                id="Feature0_0"
                key="Feature0_0"
                dataSource={Feature00DataSource}
                isMobile={this.state.isMobile}
            />,
            <div id="f-t" key="f-t" style={{ height: 80 }}></div>,
            <Footer0
                style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', textDecoration: 'none' }}
                id="Footer0_0"
                key="Footer0_0"
                dataSource={Footer00DataSource}
                isMobile={this.state.isMobile}
            />,
        ];
        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d;
                }}
            >
                {/* 如果不是 dva 2.0 替换成 {children} start */}
                {this.state.show && children}
                {/* 如果不是 dva 2.0 替换成 {children} end */}
            </div>
        );
    }
}
