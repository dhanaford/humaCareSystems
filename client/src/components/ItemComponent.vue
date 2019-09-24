<template>
    <div class="container">
        <p class="error" v-if="error.length">{{ formatErrors(error) }}</p>
        <div class="create-item">
            <input type="text" id="create-post" class="add-item" v-model="text" placeholder="Add an item">
            <label>Due Date </label>
            <input type="date" id="" v-model="date" placeholder="Due Date">
            <button class="success" @click="createItem">Add</button>
        </div>
        <div>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Due Date</th>
                    <th>Clear</th>
                </tr>
                <tr v-for="(item, index) in items"
                    :item="item"
                    :index="index"
                    :key="item._id"
                >
                    <td>{{ item.text }}</td>
                    <td>{{ formatDate(item.dueDate) }}</td>
                    <td><template>
                        <button class="cancel" @click="deleteItem(item._id)">X</button>
                    </template></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import ItemService from '../ItemService';
export default {
    name: 'ItemComponent',
    data() {
        return {
            items: [],
            error: [],
            text: '',
            date: ''
        };
    },
    async mounted() {
        try {
            this.items = await ItemService.getItems();
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async createItem() {
            if (!this.text) {
                this.error.push('Please make sure to enter a list item');
            } else if (!this.date) {
                this.error.push('Please make sure to enter a due date');
            } else {
                this.error = [];
                await ItemService.insertItem(this.text, this.date);
                this.items = await ItemService.getItems();
            }
        },
        async deleteItem(id) {
            await ItemService.deleteItem(id);
            this.items = await ItemService.getItems();
        },
        formatDate(date) {
            let dateArray = date.split('-');
            let newDate = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
            return newDate;
        },
        formatErrors(error) {
            if (error.length > 1) {
                this.error.splice(0, 1);
            }
            return this.error.toString();
        }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-top:1em;
  background-color: white;
}
table th {
   background-color: #DDEFEF;
    border: solid 1px #DDEEEE;
    color: #336B6B;
    padding: 10px;
    text-align: left;
    text-shadow: 1px 1px 1px #fff;
}
table td {
     border: solid 1px #DDEEEE;
    color: #333;
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
}
td:nth-child(3) {
  width: .25em;
}
div.container {
  margin: 2em auto;
  vertical-align: middle;
  width: 650px;
}

div.create-item {
  margin: auto;
  margin-bottom: .5em;
}

button.cancel {
  background-color:#CA3C3C;
  color: white;
  width: 100%;
}

button.success {
  background-color: #37B841;
  color: white;
  padding: 12px;
  float: right;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

li {
  position: relative;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
}


</style>
