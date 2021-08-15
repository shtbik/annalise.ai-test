import { FC, useState, useCallback, memo, useEffect } from 'react'

import unsplashApi from '../../utils/images-api'
import { TImageResponseGenerated } from './types.generated'

import Header from './Header'
import { ISearchForm } from './SearchForm'
import Pagination from './Pagination'
import ImagesList from './ImagesList'

import { StyledSearchForm } from './styled.index'

type TImagesResponseState = {
  data: TImageResponseGenerated
  meta: {
    page: number
    total?: number
    total_pages?: number
    query?: string
  }
  error: boolean
}

const PER_PAGE = 10
const fieldName = 'query'
const initialState = { data: [], error: false, meta: { page: 1 } }

const MemoizedHeader = memo(Header)

const Images: FC = () => {
  const [imagesRes, setImages] = useState<TImagesResponseState>(initialState)
  const [loading, setLoading] = useState(true)
  const { data, error, meta } = imagesRes

  const handleLoadRandom = useCallback(async () => {
    setLoading(true)
    try {
      const { response, errors } = await unsplashApi.photos.getRandom({ count: PER_PAGE })
      if (errors?.length) {
        throw errors
      }
      setImages({ ...initialState, data: response as TImageResponseGenerated })
    } catch (error) {
      console.error(error)
      setImages({ ...initialState, error: true })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleLoadRandom()
  }, [handleLoadRandom])

  const handleSubmit: ISearchForm['onSubmit'] = useCallback(async event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = formData.get(fieldName) as string

    setLoading(true)
    try {
      const { response } = await unsplashApi.search.getPhotos(
        {
          query,
          page: 1,
          perPage: PER_PAGE,
        },
        {}
      )
      setImages({
        error: false,
        data: response?.results as TImageResponseGenerated,
        meta: { total: response?.total, total_pages: response?.total_pages, page: 1, query },
      })
    } catch (error) {
      setImages({ ...initialState, error: true })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLoad = useCallback(
    async (offset: number) => {
      setLoading(true)
      try {
        const nextQuery = meta.query as string
        const nextPage = meta.page + offset
        const { response } = await unsplashApi.search.getPhotos(
          {
            query: nextQuery,
            page: nextPage,
            perPage: PER_PAGE,
          },
          {}
        )
        setImages({
          error: false,
          data: response?.results as TImageResponseGenerated,
          meta: { total: response?.total, total_pages: response?.total_pages, page: nextPage, query: nextQuery },
        })
      } catch (error) {
        setImages({ ...initialState, error: true })
        console.error(error)
      } finally {
        setLoading(false)
      }
    },
    [meta.query, meta.page]
  )

  const handleLoadPrev = useCallback(() => {
    handleLoad(-1)
  }, [handleLoad])

  const handleLoadNext = useCallback(() => {
    handleLoad(1)
  }, [handleLoad])

  return (
    <div>
      <MemoizedHeader />
      <StyledSearchForm name={fieldName} onSubmit={handleSubmit} onReset={handleLoadRandom} disabled={loading} />

      {meta.query && meta.total ? (
        <Pagination
          disabled={loading}
          onPrev={meta.page > 1 ? handleLoadPrev : undefined}
          onNext={meta.page < (meta.total_pages || 0) ? handleLoadNext : undefined}
        />
      ) : null}
      <p>{meta.total ? `Total: ${meta.total}. Pages: ${meta.page} / ${meta.total_pages}` : ''}</p>

      <ImagesList loading={loading} data={data} error={error} />
    </div>
  )
}

export default Images
