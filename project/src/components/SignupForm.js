function SignupForm(props){
    const form = document.createElement('div')
    form.id = 'form_container'
    props.target.appendChild(form)
    const formElem = document.createElement('span')
    formElem.className = 'form_elem'
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.innerText = '등록'

    this.render = () => {
        form.innerHTML = `
            <span class="form_elem">
                <input id="name" placeholder="이름">
            </span>
            <span class="form_elem">
                <input id="email" placeholder="이메일">
            </span>
            <span class="form_elem">
                <input id="nickname" placeholder="닉네임">
            </span>
            <span class="form_elem">
                <select id="role" name="role">
                    <option value="">직군을 선택해주세요</option>
                    <option value="backend">백엔드</option>
                    <option value="frontend">프론트엔드</option>
                    <option value="fullstack">풀스택</option>
                </select>
            </span>
            <span class="form_elem">
                <select id="mbti" name="mbti">
                    <option value="">MBTI를 선택해주세요</option>
                    <option value="backend">백엔드</option>
                    <option value="frontend">프론트엔드</option>
                    <option value="fullstack">풀스택</option>
                </select>
            </span>
        `
        formElem.appendChild(submitBtn)
        form.appendChild(formElem)
    }

    this.render()

    submitBtn.addEventListener('click', ()=>{
        const newData = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            nickname: document.querySelector('#nickname').value,
            role: document.querySelector('#role').options[document.querySelector('#role').selectedIndex].text,
            mbti: document.querySelector('#mbti').value
        }
        props.onClick(newData)
    })
}

export default SignupForm