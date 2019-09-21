import axios from 'axios';

const url = 'http://localhost:5000/api/items/';

class ItemService {
    // Get Items
    static getItems() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(item => ({
                        ...item,
                        createdAt: new Date(item.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    // Create Item
    static insertItem(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Item
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ItemService;
