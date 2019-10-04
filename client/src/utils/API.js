import axios from 'axios'

export default {

    sales360Query: function(path, Data) {
        return axios.post('/api/' + path, Data);
    },
    classic360Query: function(path, Data) {
        return axios.put('/api/' + path, Data);
    }
}