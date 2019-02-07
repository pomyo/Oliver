import $ from 'axios';

const routes = {
    addTransaction: data => { return $.post('/api/addTransaction', data)},
    getDataOfMonth: data => { return $.get('/api/getDataOfMonth/' + data.month + "/" + data.year)}
} 

export default routes;
  