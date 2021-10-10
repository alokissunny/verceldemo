import  {mentors}  from "./data";


  export function  getMentors(type) {
      console.log(type);
        const res = new Promise((resolve, reject) => {
           let timeout =  setTimeout(() => {
                resolve(mentors);
                clearTimeout(timeout);
            }, 1000);
        });
        
        return res;

    }
