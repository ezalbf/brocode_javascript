const axiosRequest =require('axios')

async function getActivity(){
    try{
        let response = await axiosRequest.get('https://www.boredapi.com/api/activity')
        console.log(`you should ${response.data.activity}`)
    }
    catch(error){
        console.log(`error: ${error}`)
    }
    
}

getActivity()