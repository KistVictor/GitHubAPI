function Card({ title, description, topics, url, language, stars }) {

	return(
    <li className="flex flex-col items-start  w-full pb-6 mb-6 border-b border-gray-600 border-solid">

      <a className="text-xl text-blue-500 font-medium hover:underline" href={url}>
        <h2>{title}</h2>
      </a>
      <p className="mb-2 text-sm text-left leading-tight text-gray-400">{description}</p>

      <ul className="flex flex-row gap-2 mb-3">
        {topics.slice(0, 5).map((item, i) => <li key={i} className="px-2 text-xs bg-gray-600 text-gray-50 rounded-full">{item}</li>)}
      </ul>

      <div className="flex flex-row gap-2 text-sm text-left leading-tight text-gray-400">
        <span>{language}</span>
        <span>✰ {stars}</span>
      </div>

    </li>
	)
}

export default Card