import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// 导入各种组件
import Home from '../Component/App'; // 首页组件

import NotFoundPage from '../Component/NotFoundPage'; // NotFoundPage
import Login from '../Component/Login'; // NotFoundPage
import Table from '../Component/ContentTable';

// 路由配置
const RouteConfig = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/table" component={Table} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

// 导出
export default RouteConfig;
