import { NavLink, Route, Switch } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">

            {/*原生 HTML 中，靠 a 标签跳转到不同的页面*/}
            {/*<a className="list-group-item" href="./about.html">About</a>*/}
            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

            {/*React 中，靠路由链接实现切换组件*/}
            {/*编写路由链接*/}
            {/*<NavLink activeClassName="highlight" className="list-group-item" to="/about">About</NavLink>*/}
            {/*<NavLink activeClassName="highlight" className="list-group-item" to="/home">Home</NavLink>*/}

            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>

          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">

              {/*注册路由*/}
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </Switch>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
