import { Link, Route } from 'react-router-dom'
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
            <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item" to="/home">Home</Link>

          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">

              {/*注册路由*/}
              <Route path="/about" component={About}/>
              <Route path="/home" component={Home}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
