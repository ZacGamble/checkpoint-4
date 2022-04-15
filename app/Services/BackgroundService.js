import { sandboxApi } from "./AxiosService.js";

class BackgroundService{
 
    async getBackground(){
        const res = await sandboxApi.get('images')
        console.log('get Backgrounds',res.data);
        
        
    }
}
