import { ReturnGetI } from "../interfaces/returnGetI";
import { SoccerGameI } from "../interfaces/soccerGameI";
import { getService } from "../utils/fetch"

export const getSoccerGame = async()=>{
    const res:any = await getService('SoccerGame');
    return res
}

export const getSoccerGameByUser = async(id:string)=>{
    const res:any = await getService('SoccerGame/'+id);
    return res
}