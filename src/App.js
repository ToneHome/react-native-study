import React from 'react';
import {StackNavigator} from 'react-navigation';
import {TabNav} from "./navigation/RootPage";
import LoginPage from "./page/Login/loginPage";
import RegPage from "./page/Login/regPage";
import {FindAccountPage} from "./page/Login/findAccountPage"; // 路由导航

const App = StackNavigator({
        Login: {screen: LoginPage}, // 登录页
        Reg: {screen: RegPage}, // 注册页
        FindAccount: {screen: FindAccountPage}, // 找回密码页
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'screen'
    });

export default App;