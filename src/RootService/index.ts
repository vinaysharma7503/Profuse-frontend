import Dev from "./dev";
import Prod from "./prod";
import axios from "axios";

const RootService: any = (env = "dev") => (env === "dev" ? Dev : Prod);

//ENVIRONMENT CHANGE
const { BASEURL = "" } = RootService(process.env.NODE_ENV?.trim());

(() => {
  axios.interceptors.request.use(
    function (config: any) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(function (response){
    return response
  },function (error){
    return Promise.reject(error);
  })
})();


export const getReq =async (url:string) => {
    return axios.get(BASEURL + url)
    .catch((e:any)=>{console.log(e,'e h'); return e})
}
export const postReq =async (url:string,data:any) => {
    return axios.post(BASEURL + url,data)
    .catch((e:any)=>{console.log(e,'e h'); return e})
}
export const patchReq =async (url:string,data:any) => {
    return axios.patch(BASEURL + url,data)
    .catch((e:any)=>{console.log(e,'e h'); return e})
}
export const deleteReq =async (url:string) => {
    return axios.delete(BASEURL + url)
    .catch((e:any)=>{console.log(e,'e h'); return e})
}