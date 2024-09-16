// app/components/ImageUpload.tsx
import React, { ChangeEvent } from 'react'
import Image from 'next/image'

interface ImageUploadProps {
  onImageUpload: (file: File) => void
  image: string | null
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, image }) => {
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onImageUpload(file)
    }
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="fileInput"
        className="block w-full p-2 text-center border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-400 transition duration-300"
      >
        <span className="text-gray-600">
          {image ? 'Click to change image' : 'Click to upload an image'}
        </span>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
      {image && (
        <div className="mt-4">
          <Image src={image} alt="Uploaded plant" width={300} height={300} className="rounded mx-auto" />
        </div>
      )}
    </div>
  )
}

export default ImageUpload