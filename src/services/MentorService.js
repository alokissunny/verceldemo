import { mentors } from "./data";


  export function  getMentors(offset =0) {
        const res = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mentors);
            }, 5000);
        });
        
        return res;

    }
