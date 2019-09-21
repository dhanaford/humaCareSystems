<template>
    <div class="container">
        <p class="error" v-if="error">{{ error }}</p>
        <div>
          <ul>
            <li 
              v-for="(item, index) in items"
              :item="item"
              :index="index"
              :key="item._id">{{item.text}}
            </li>
          </ul>
        </div>
        <!-- <div class="item-container">
            <div class="item"
                v-for="(item, index) in items"
                :item="item"
                :index="index"
                :key="item._id"
            >
                {{ `${item.createdAt.getDate()}/` }}
                <p class="text">{{ item.text }}</p>
                <button @click="deletePost(item._id)">Delete</button>
            </div>
        </div> -->
    </div>
</template>

<script>
import ItemService from '../ItemService';
export default {
    name: 'ItemComponent',
    data() {
        return {
            items: [],
            error: '',
            text: ''
        };
    },
    async created() {
        try {
            this.items = await ItemService.getItems();
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async createItem() {
            await ItemService.insertItem(this.text);
            this.items = await ItemService.getItems();
        },
        async deletePost(id) {
            await ItemService.deletePost(id);
            this.items = await ItemService.getItems();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: 3bcffb8; padding: 10px 10px 30px 10px; margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
