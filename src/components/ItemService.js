import axios from 'axios';

class ItemService {

  sendData(data) {
    axios.post('http://localhost:4200/items/add/post', {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:4200/items/update/'+id, {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('http://localhost:4200/items/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default ItemService;
