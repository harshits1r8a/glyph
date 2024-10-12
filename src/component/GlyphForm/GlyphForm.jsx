import {useCallback,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import databaseService from "../../appwrite/databaseService"
// import databasesservice from '../../appwrite/databaseService'
import databaseService from '../../appwrite/databaseService'
import storageService from "../../appwrite/storageService"
import {Btn,Container,Input, RTE, Select} from "../index"


const GlyphForm = ({post}) => {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues : {
      title : post?.title || "",
      slug : post?.$id || "",
      content : post?.content || "",
      status : post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData)
  

  const submit = async(data)=>{
    if(post){
      const file = data.image[0] ? await storageService.uploadFile(data.image[0] ): null;
      if(file){
        storageService.deleteFile(post.featuredImage)
      }

      const dbPost = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage : file ? file.$id : undefined
      })

      if(dbPost){
        navigate(`/glyph/${dbPost.$id}`)
      }
    }else{
      const file = await storageService.uploadFile(data.image[0])
      if(file){
        const fileId = file.$id;
        data.featuredImage = fileId
        console.log(userData);
        console.log(userData.$id);
        
        const dbPost = await databaseService.createPost({
          ...data,
          userId : userData.$id
        })
        if(dbPost){
          navigate(`/glyph/${dbPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value)=>{
    if(value && typeof value === "string")
      return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d]+/g,"-")
    return ''
  },[])

  useEffect(()=>{
    const subscription = watch((value, {name})=>{
      if(name === 'title'){
        setValue("slug", slugTransform(value.title),{shouldValidate : true})
      }
    });

    return ()=> subscription.unsubscribe()
  },[watch, slugTransform, setValue])

  return (
    <Container className="dark:bg-[#0d0d0d]">
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className='w-2/3 px-2'>
         <Input
            label = 'Title :'
            placeholder = 'Title'
            className = 'mb-4'
            {...register("title", {required:true})}
         />
         <Input
           label = 'Slug :'
           placeholder= "Slug"
           className = "mb-4"
           {...register("slug", {required : true})}
           onInput = {(e)=>{
            setValue("slug", slugTransform(e.currentTarget.value),{shouldValidate: true})
           }}
         />
         <RTE label="Content : " name="content" control={control} defaultValue={getValues("content")}/>
        </div>

        <div className='w-1/3 px-2'>
           <Input
              label = "Featured Image :"
              type = "file"
              className = "mb-4"
              accept = "image/png, image/jpg, image/jpeg, image/gif"
              {...register("image", {required : !post})}
           />
           {post && (
            <div className="w-full mb-4">
              <img
                src={storageService.getFilePreview(post.featuredImg)}
                alt={post.title}
                className='rounded-lg'
              />
            </div>
           )}
           <Select
           options={["active", "inactive"]}
           label = "Status :"
           className = "mb-4"
           {
            ...register("status", {required : true})
           }
           />
           <Btn type="submit" className="w-full">{post ? "Update" : "Submit"}</Btn>
        </div>
      </form>
    </Container>
  )
}

export default GlyphForm
