import config from "../config/config";

export const getService = async <T>(endPoint: string) => {
  try {
//    const { token } = await getCookie("token");
    const response = await fetch(config.backendUrl + endPoint, {
      method: "GET",
      headers: new Headers({
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: ' ',
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return {
        data: result,
      };
    }
  } catch (err) {
    console.error(err);
  }
};

export const postService = async <T, R>(url: string, body: T)=>{
    try {
        //const { token } = await getCookie("token");
    
        const response = await fetch(config.backendUrl + url, {
          method: "POST",
          headers: new Headers({
            accept: "application/json",
            "Content-Type": "application/json",
            authorization: ' ',
          }),
    
          body: JSON.stringify({
            ...body,
          }),

        });
    
        const res = await response.json();
        return res;
      } catch (error) {
        let msgError = "";
        if (error instanceof Error) {
          msgError = error.message;
        }
        return {
          msg: msgError,
        };
      }
}

export const deleteServ = async (url: string) => {
    try {
      const response = await fetch(config.backendUrl + url, {
        method: "DELETE",
        headers: new Headers({
            accept: "application/json",
            "Content-Type": "application/json",
            authorization: ' ',
          }),
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };