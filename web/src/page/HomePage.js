import Card from "../components/Card.js";
import ContentTitle from "../components/ContentTitle.js";
import { request } from "../util/api.js";

function HomePage(props){
    this.state = props.initialState

    const fetchData = async () => {
        const result = await request('src/data/new_data.json')
        const localResult = result.map((data, idx)=>{
            return{
                idx: idx+1,
                name: data.name,
                email: data.email,
                nickname: data.nickname,
                role: data.role,
                mbti: data.mbti,
                status: false
            }
        })
        
        this.setState(localResult)
        localStorage.setItem('personalInfo', JSON.stringify(localResult))
    }

    if(!this.state){
        fetchData()
    }

    this.$element = document.createElement('main')
    this.$element.id = 'page_content'

    this.setState = (nextState) => {
        this.state = nextState;
        this.render()
    }
    
    new ContentTitle({
        $target: this.$element,
        title: props.title,

    })  

    this.render = () => {
        props.$target.appendChild(this.$element)
        new Card({
            $target: this.$element,
            initialState: this.state
        })
    }
}

export default HomePage