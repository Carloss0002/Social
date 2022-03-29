<template>
  <div id="dashboard">
      <h2>Minha conta</h2>
      <span>Atualize seu perfil</span>

      <form @submit.prevent="updateProfile">
        <label for="name">Nome:</label>
        <input type="text" v-model="nome" id="name" :placeholder="user.nome">

        <button>Atualizar</button>
      </form>
      <button class="logout" @click="logOut">Sair</button>
  </div>
</template>

<script>
import firebase from '../services/firebaseConnection'
export default {
    name:'Dashboard',
    data(){
      return{
         nome: '',
         user: {}
      }
    },
    created(){
      const user = localStorage.getItem('devpost')
      this.user = JSON.parse(user)
    },
    methods:{
      async logOut(){
        const confirm = window.confirm('Você deseja Sair?')

        if(confirm){
          await firebase.auth().signOut()
          .then(async ()=>{
            await localStorage.removeItem('devpost')

            this.$router.push('/Login')
          })
        }else{
          return;
        }
      },
      async updateProfile(){
        if(this.nome == ''){
          return;
        }
        await firebase.firestore().collection('users')
        .doc(this.user.uid).update({
          nome: this.nome
        })
        //Atualizando todos os posts do usuario
        const postDocs = await firebase.firestore().collection('posts')
        .where('userId', '==', this.user.uid).get()

        // percorrer todos os postspara mudar o nome
        postDocs.forEach(async doc =>{
          await firebase.firestore().collection('posts').doc(doc.id).update({
            autor: this.nome
          })
        })

        // atualizar localstorage
        localStorage.setItem('devpost', JSON.stringify({uid:this.user.uid, nome: this.nome}))

        alert('perfil atalizado com sucesso')
      }
    }
    
}
</script>

<style scoped>
  #dashboard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding: 15px 20px;
    width: 600px;
    max-width: 600px;
    background: #4c5059;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  span{
    margin-bottom: 25px;
  }
  form{
    width: 500px;
    display: flex;
    flex-direction: column;
  }
  form label{
    font-size: 18px;
    color: #fff;
    padding-bottom: 5px;  
  }
  form input{
    height: 30px;
    padding: 5px;
    font-size: 17px;
    border: 0;
    outline: none;
    margin-bottom: 5px;
    background: #FAFAFA;
  }
  button{
    cursor: pointer;
    margin-top: 10px;
    height: 35px;
    border: 0;
    background: #7289DA;
    color: #fff;
    font-size: 17px; 
  }
button.logout{
  width: 500px;
  background: #E36D6D;
  color: #fff;
}
</style>