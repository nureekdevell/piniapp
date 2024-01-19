import {defineStore} from "pinia";
export const useCounterStore = defineStore('counterStore', {
    state: () => {
    return{
        name: '',
        email: '',
        job: '',
        users:[]
    }
    },
    actions: {
    addUser(event) {
    event.preventDefault()
        let newUser = {
            id:this.users.length+1,
            name:this.name,
            email:this.email,
            job:this.job
        }
        if (this.name.trim() === '' || this.email.trim === '' || this.job.trim()=== '') {
            alert('iltimos Inputlarga bush joy qoldirmang')
            return
        }if (!this.email.includes('@gmail')) {
            alert('Iltimos @ kiriting')
            return
        }
        this.users.push(newUser)
        this.name = ''
        this.email = ''
        this.job = ''
}
    },
    getters: {


        }



})

