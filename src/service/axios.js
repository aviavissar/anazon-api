import axioss from 'axios';
let axios=axioss.default



export const getData = async () => {

    try {
        const response = await axios({
            method: 'get',
            url: '/campaigns',
           
        });
        console.log(response.data);
       return  response.data

    } catch (error) {
        console.log('client error'+error)
    }
}
