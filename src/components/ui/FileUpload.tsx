'use client'
import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'



const FileUpload = () => {
    const {getRootProps, getInputProps} = useDropzone({
      accept: {"application/pdf": [".pdf"]},
      maxFiles: 1,
      onDrop: (acceptedFiles) =>{
        console.log(acceptedFiles);
      }
    });
  return (
    <div className='mt-8 p-2 rounded-xl bg-white'>
        <div {...getRootProps({
            className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 flex items-center justify-center py-14  flex-col'
        })}>
            <input{...getInputProps()}/>
            <>
            <Inbox className='w-10 h-14' />
            <p className='mt-2 text-slate-600'>Drop PDF here</p>
            </>
        </div>
    </div>
  )
}

export default FileUpload