import {createPost,getPost,likePost,postCommnet} from "../services/postServices";


export const  CreatePostAction =(data,token)=>{
   
    return () => {
        return createPost(data,token).then( res => {
                 if (res.statusCode == 1) {
                    return "Success";
                 }else {
                     return res;
                 }
             }).catch(e => {
               return "failed";
         })
     };

 }

export const GetPostAction =(token)=> {
    
    return () => {
       return getPost(token).then( res => {
                if (res.statusCode == 1) {
                   return res.responseData;
                }else {
                    return res;
                }
            }).catch(e => {
              return "failed";
        })
    };
}

export const LikePostAction =(data,token).then(res=>{
   
    return () => {
       return likePost(data,token).then( res => {
                 if (res.statusCode == 1) {
                    return "Success";
                 }else {
                     return res;
                }
             }).catch(e => {
               return "failed";
         })
     };

})

export const PostCommentAction=(data,token).then(res=>{
    return () => {
        return postCommnet(data,token).then( res => {
                  if (res.statusCode == 1) {
                     return res.responseData;
                  }else {
                      return res;
                 }
              }).catch(e => {
                return "failed";
          })
      };

})

