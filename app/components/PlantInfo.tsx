// app/components/PlantInfo.tsx
/*import React from 'react'

interface PlantInfoProps {
  result: string | null
}

const PlantInfo: React.FC<PlantInfoProps> = ({ result }) => {
  if (!result) return null

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-2">Plant Information:</h2>
      <p className="whitespace-pre-wrap">{result}</p>
    </div>
  )
}

export default PlantInfo
// app/components/PlantInfo.tsx
import React from 'react'

interface PlantInfoProps {
  result: string | null
}

const PlantInfo: React.FC<PlantInfoProps> = ({ result }) => {
  if (!result) return null

  return (
    <div className="mt-4 p-4 bg-white rounded shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Plant Information:</h2>
      <p className="whitespace-pre-wrap text-gray-700">{result}</p>
    </div>
  )
}

export default PlantInfo
// app/components/PlantInfo.tsx
import React from 'react'

interface PlantInfoProps {
  result: string | null
}

const PlantInfo: React.FC<PlantInfoProps> = ({ result }) => {
  if (!result) return null

  // Split the result into sections
  const sections = result.split('\n\n').filter(section => section.trim() !== '')

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-4 text-green-600 relative group">
        Plant Information
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </h2>
      {sections.map((section, index) => {
        const [title, ...content] = section.split('\n')
        return (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-green-500 relative group inline-block">
              {title}
              <span className="absolute
// app/components/PlantInfo.tsx
import React from 'react'

interface PlantInfoProps {
  result: string | null
}

const PlantInfo: React.FC<PlantInfoProps> = ({ result }) => {
  if (!result) return null

  // Split the result into sections
  const sections = result.split('\n\n').filter(section => section.trim() !== '')

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-4 text-green-600 relative group">
        Plant Information
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </h2>
      {sections.map((section, index) => {
        const [title, ...content] = section.split('\n')
        return (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-green-500 relative group inline-block">
              {title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </h3>
            <p className="text-gray-700 whitespace-pre-wrap">
              {content.join('\n')}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default PlantInfo
// app/components/PlantInfo.tsx
import React from 'react'

interface PlantInfoProps {
  result: string | null
}

const PlantInfo: React.FC<PlantInfoProps> = ({ result }) => {
  if (!result) return null

  // Split the result into sections
  const sections = result.split('\n\n').filter(section => section.trim() !== '')

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border border-green-200 transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-6 text-green-600 pb-2 border-b-2 border-green-300">
        Plant Identification Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, index) => {
          const [title, ...content] = section.split('\n')
          return (
            <div key={index} className="bg-green-50 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2 text-green-700 bg-green-200 inline-block px-3 py-1 rounded-full">
                {title}
              </h3>
              <p className="text-gray-700 whitespace-pre-wrap mt-2">
                {content.join('\n')}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlantInfo*/
// app/components/PlantInfo.tsx
import React from 'react'

interface PlantInfoProps {
  result: string | null
}

const PlantInfo: React.FC<PlantInfoProps> = ({ result }) => {
  if (!result) return null

  const sections = result.split('\n\n').filter(section => section.trim() !== '')

  const renderContent = (content: string, title: string) => {
    if (title.toLowerCase().includes('care tips')) {
      const tips = content.split('\n').filter(tip => tip.trim() !== '')
      return (
        <table className="w-full mt-2">
          <tbody>
            {tips.map((tip, index) => {
              const [category, description] = tip.split(':').map(s => s.trim())
              return (
                <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                  <td className="py-2 px-3 font-medium text-green-700">{category}</td>
                  <td className="py-2 px-3">{description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }
    return <p className="text-gray-700 mt-2">{content}</p>
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border border-green-200">
      <h2 className="text-2xl font-bold mb-6 text-green-600 pb-2 border-b-2 border-green-300">
        Plant Identification Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, index) => {
          const [title, ...content] = section.split('\n')
          const cleanTitle = title.replace(/\*/g, '').trim()
          return (
            <div key={index} className="bg-green-50 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-green-700 bg-green-200 inline-block px-3 py-1 rounded-full">
                {cleanTitle}
              </h3>
              {renderContent(content.join('\n'), cleanTitle)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlantInfo