import React from "react";

import SideNav from "../../../../components/SideNav";
import { Divider, Layout, Input } from "antd";
import "./index.css";

const { Search } = Input;

export default class Side extends React.Component {
    render() {
        return (
            <div className="Container">
                <div>某某博客</div>
                <SideNav />
                <Divider />
                <Search
                    placeholder="输入关键字"
                    enterButton="搜索"
                    // size="large"
                    onSearch={value => console.log(value)}
                />
                <div>
                    <div className="colorBlock"></div>
                    <div className="Text">微博</div>
                </div>
                <div className="link">
                    <div className="colorBlock"></div>
                    <div className="Text">腾讯微博</div>
                </div>
                <Divider />
                <div className="Text">广告链接一</div>
                <div className="Text">广告链接二</div>
                <div className="Text">广告链接三</div>
            </div>
        );
    }
}
