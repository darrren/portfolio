export const cancellablePromise = (promise: any) => {
  const isCancelled = {
    value: false
  }
  const wrappedPromise = new Promise<void>((res, rej) => {
    promise.then(() => {
      return isCancelled.value ? rej(isCancelled) : res()
    })
    .catch((e: any) => {
      rej(isCancelled.value ? isCancelled : e)
    })
  })

  return {
    promise: wrappedPromise,
    cancel: () => {
      isCancelled.value = true;
    }
  }
}