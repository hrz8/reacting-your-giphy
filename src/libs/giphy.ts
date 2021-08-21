import qs from 'qs'

const GIPHY_API_URL = 'https://api.giphy.com/v1'

interface GiphyQueryParams {
  api_key: string
  q: string
  limit: number
  offset?: number
  rating?: string
  lang?: string
}

const stringifyQuery = (params: GiphyQueryParams): string => {
  const finalParams = Object.assign(
    {},
    {
      offset: 0,
      rating: 'g',
      lang: 'en',
    },
    params
  )
  return qs.stringify(finalParams, {
    encodeValuesOnly: true,
  })
}

const endpointGenerator = (params: GiphyQueryParams): string =>
  `${GIPHY_API_URL}/gifs/search?${stringifyQuery(params)}`

export default {
  endpointGenerator,
}
