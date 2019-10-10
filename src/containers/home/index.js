import React from "react";
import { Layout } from "antd";
import NavBar from "../../components/NavBar";
import Side from "./components/Side/index.js";
import HomeContent from "./components/HomeContent";
const { Footer, Content } = Layout;

export default class Home extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout>
                <Side />
                <HomeContent />
            </Layout>
        );
    }
}
