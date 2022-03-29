<template>
   <div class="modal">
      <div class="container">
          <a class="close" @click="$emit('close')">Voltar</a>
          <div>
              <h2>{{post.autor}}</h2>
              <span v-if="post.likes === 0? false: true">
                  {{post.likes === 1 ? `${post.likes} Curtidas`:`${post.likes} Curtidas`}}
              </span>
              <p>
                  {{post.content}}
              </p>
          </div>
      </div>
   </div>
</template>

<script>
export default {
     name: 'Modal',
     props:['post']
}
</script>

<style scoped>
   .modal{
       position: fixed;
       top: 0;
       right: 0;
       bottom: 0;
       left: 0;
       background: rgba(0, 0, 0, 0.5);
       z-index: 999;
   }
   .modal .container{
     position: fixed;
     max-width:  600px;
     top: 4vh;
     bottom: 4vh;
     left: 0;
     right: 0;
     margin: 0 auto;
     padding: 2rem;
     border-radius: 4px;
     background-color: #fff;
     box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
     overflow: auto;
   }
   .close{
       cursor: pointer;
       background: #121212;
       padding: 4px 15px;
       color: #fff;
       position: absolute;
       top: 10px;
       left: 10px;
   }
   span{
       font-style: italic;
       font-weight: bold;
       color: #121212;
   }
   p{
       white-space: pre-wrap;
   }
</style>

