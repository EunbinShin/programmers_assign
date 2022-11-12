import Card from "../components/Card.js";
import ContentTitle from "../components/ContentTitle.js";
import { request } from "../util/api.js";

function HomePage(props){
    /*
    <main id="page_content">
        <div class="content_title">
            <h1> CardView </h1>
        </div>
    </main>
    */
    this.state = props.initialState 
    this.element = document.createElement('main')
    this.element.id = 'page_content'

    this.setState = (nextState) => {
        this.state = nextState;
        cards.setState(this.state)
    }
    
    new ContentTitle({
        target: this.element,
        title: props.title
    })  

    const cards = new Card({
        target: this.element,
        initialState: this.state
    })
      

    const fetchData = async () => {
        const result = await request('src/data/new_data.json')
        this.setState(result)
        const localResult = result.map((data, idx)=>{
            return{
                idx: idx+1,
                name: data.name,
                email: data.email,
                nickname: data.nickname,
                role: data.role,
                mbti: data.mbti,
            }
        })
        localStorage.setItem('personalInfo', JSON.stringify(localResult))
    }

    this.render = () => {
        const oldPage = document.querySelector('#page_content')
        if(oldPage){
            props.target.replaceChild(this.element, oldPage)
        }else{
            props.target.appendChild(this.element)
        }
    }

    this.state ? this.setState(props.initialState) : fetchData()

}

export default HomePage