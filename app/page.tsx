// app/page.tsx
/*'use client'

import { useState } from 'react'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  const identifyPlant = async () => {
    if (!image) return

    setLoading(true)
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const parts = [
        {text: "Identify this plant and provide its common name, scientific name, and brief care instructions."},
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: image.split(',')[1]
          }
        }
      ];

      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings,
      });

      const response = result.response;
      setResult(response.text());
    } catch (error) {
      console.error('Error identifying plant:', error)
      setResult('Error identifying plant. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Plant Identifier</h1>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <ImageUpload onImageUpload={handleImageUpload} image={image} />
        <button
          onClick={identifyPlant}
          disabled={!image || loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Identifying...' : 'Identify Plant'}
        </button>
        <PlantInfo result={result} />
      </div>
    </main>
  )
}
// app/page.tsx
// app/page.tsx
'use client'

import { useState } from 'react'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  const identifyPlant = async () => {
    if (!image) return

    setLoading(true)
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const parts = [
        {text: "Identify this plant and provide its common name, scientific name, and brief care instructions. Format the response with clear section titles for each piece of information."},
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: image.split(',')[1]
          }
        }
      ];

      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings,
      });

      const response = result.response;
      setResult(response.text());
    } catch (error) {
      console.error('Error identifying plant:', error)
      setResult('Error identifying plant. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Plant Identifier</h1>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <ImageUpload onImageUpload={handleImageUpload} image={image} />
        <button
          onClick={identifyPlant}
          disabled={!image || loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Identifying...' : 'Identify Plant'}
        </button>
        <PlantInfo result={result} />
      </div>
    </main>
  )
}
// app/page.tsx
'use client'

import { useState } from 'react'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  const identifyPlant = async () => {
    if (!image) return

    setLoading(true)
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const parts = [
        {text: "Identify this plant and provide the following information in separate sections: Common Name, Scientific Name, Plant Family, Key Characteristics, Ideal Growing Conditions, and Care Tips. Format each section with a clear title."},
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: image.split(',')[1]
          }
        }
      ];

      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings,
      });

      const response = result.response;
      setResult(response.text());
    } catch (error) {
      console.error('Error identifying plant:', error)
      setResult('Error identifying plant. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">PlantPro Identifier</h1>
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <ImageUpload onImageUpload={handleImageUpload} image={image} />
          <button
            onClick={identifyPlant}
            disabled={!image || loading}
            className="w-full bg-green-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 disabled:opacity-50 mt-4"
          >
            {loading ? 'Analyzing Plant...' : 'Identify Plant'}
          </button>
          <PlantInfo result={result} />
        </div>
      </div>
    </main>
  )
}*/
// app/page.tsx
'use client'

import { useState } from 'react'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  const identifyPlant = async () => {
    if (!image) return

    setLoading(true)
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const parts = [
        {text: `Identify this plant and provide the following information in separate sections:

        Common Name:
        Scientific Name:
        Plant Family:
        Key Characteristics:
        Ideal Growing Conditions:
        Care Tips:
        - Watering:
        - Sunlight:
        - Soil:
        - Fertilizer:
        - Pruning:

        Please ensure each section has a clear title and the Care Tips are formatted as a list with categories.`},
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: image.split(',')[1]
          }
        }
      ];

      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings,
      });

      const response = result.response;
      setResult(response.text());
    } catch (error) {
      console.error('Error identifying plant:', error)
      setResult('Error identifying plant. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">PlantPro Identifier</h1>
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <ImageUpload onImageUpload={handleImageUpload} image={image} />
          <button
            onClick={identifyPlant}
            disabled={!image || loading}
            className="w-full bg-green-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 disabled:opacity-50 mt-4"
          >
            {loading ? 'Analyzing Plant...' : 'Identify Plant'}
          </button>
          <PlantInfo result={result} />
        </div>
      </div>
    </main>
  )
}