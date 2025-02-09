import { preloadAllImages, setLoadingItem } from '@/Stores/state'

export const preloadImgTag = () => {
  setLoadingItem('images', { loaded: false })
  const { promise, cancel } = preloadAllImages()
  promise.then(() => {
    setTimeout(() => {
      console.log('all img tag loaded')
      setLoadingItem('images', { loaded: true })
    }, 500)
  })
  .catch(e => {
    console.log(e)
  })
  return { cancel }
}