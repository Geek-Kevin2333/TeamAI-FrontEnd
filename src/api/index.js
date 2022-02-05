import axios from 'axios';
import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './simpleConfig.json',
        method: 'get',
        params: query
    });
};
// export const fetchData = (userId)=>{
//     // axios.get('/api/config/get/all_new',{
//        axios.get('./simple_Config.json',{
//             params:{
//                 userId
//             }
//         }).
//         then(function (response) {
  
//             return response
//         })
// }