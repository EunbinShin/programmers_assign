import Header from "./components/Header.js";
import HomePage from './page/HomePage.js'
import SignupPage from './page/SignupPage.js'
import {init, routeChage} from './util/route.js'

function App(props){
    new Header({
        target: props.target,
        onClickHome: ()=>{routeChage('/web/')},
        onClickSignup: ()=>{routeChage('/web/signup')}
    });

    this.route = () => {
        const pathname = location.pathname;
        const localData = JSON.parse(localStorage.getItem('personalInfo'))

        if(pathname === '/web/'){
            new HomePage({
                target: props.target,
                title: 'Great PeoPle',
                initialState: localData
            }).render()
            console.log('홈페이지')
        }else if(pathname === '/web/signup'){
            new SignupPage({
                target: props.target,
                title: 'Sign Up, Great PeoPle!',
                onClick: (newData)=>{
                    newData = {
                        idx: localData[localData.length-1].idx + 1,
                        ...newData
                    }
                    localData.push(newData)
                    localStorage.setItem('personalInfo', JSON.stringify(localData))
                }
            }).render()
            console.log('회원가입 페이지')
        }
    }

    init(this.route)
    this.route()
}

export default App;