import ContentTitle from "../components/ContentTitle.js";
import SignupForm from "../components/SignupForm.js";
function SignupPage(props){
    this.element = document.createElement('main')
    this.element.id = 'page_content'

    new ContentTitle({
        target: this.element,
        title: props.title
    })

    this.render = () => {
        const oldPage = document.querySelector('#page_content')
        if(oldPage){
            props.target.replaceChild(this.element, oldPage)
        }else{
            props.target.appendChild(this.element)
        }
    }

    const signupForm = new SignupForm({
        target:this.element,
        onClick: props.onClick
    })
}

export default SignupPage