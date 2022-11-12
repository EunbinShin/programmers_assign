function Header(props){
    console.log('Header')

    this.header = document.createElement('header');
    
    this.home = document.createElement('div');
    this.home.className = 'header header_left'

    this.home_span = document.createElement('span');
    this.home_span.className = 'menu_name'
    this.home_span.id = 'menu_home'
    this.home_span.innerText = 'HOME'

    this.signup = document.createElement('div');
    this.signup.className = 'header header_right'

    this.signup_span = document.createElement('span');
    this.signup_span.className = 'menu_name'
    this.signup_span.id = 'menu_signup'
    this.signup_span.innerText = 'SIGNUP'

    this.home.appendChild(this.home_span)
    this.signup.appendChild(this.signup_span)

    this.header.appendChild(this.home)
    this.header.appendChild(this.signup)

    props.target.appendChild(this.header)

    this.signup_span.addEventListener('click', ()=>{
        props.onClickSignup()
    })
    this.home_span.addEventListener('click', ()=>{
        props.onClickHome()
    })
}

export default Header;