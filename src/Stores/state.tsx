// import { createRef } from 'react'
import { hookstate } from "@hookstate/core"
import imagesLoaded from 'imagesloaded'
import { cancellablePromise } from '@/Components/cancellablePromise'
import Lenis from 'lenis'

interface State {
  env: string | undefined;
  lang: string;
  isTest: boolean;
  baseUrl: string;
  apiBaseUrl: string;
  isInit: boolean;
  isLoading: boolean;
  isLoaded: {};
  loadedCount: number;
  lenisScroll: Lenis | null;
  scrollY: number;

  // Popup
  msgDialogVisible: boolean;
  msgDialogMessage: string;
}

const initialState: State = {
  env: process.env.REACT_APP_ENV,
  lang: process.env.REACT_APP_LANG || 'tc',
  isTest: false,
  baseUrl: process.env.PUBLIC_URL + '/',
  apiBaseUrl: process.env.REACT_APP_ENV === 'development' ? process.env.PUBLIC_URL + '/' : process.env.REACT_APP_API_PATH + '/',
  isInit: false,
  isLoading: true,
  isLoaded: {},
  loadedCount: 0,
  lenisScroll: null,
  scrollY: 0,

  // Popup
  msgDialogVisible: false,
  msgDialogMessage: '',
}

export const preloadAllImages = () => {
  const { promise, cancel } = cancellablePromise(new Promise((resolve) => {
    imagesLoaded(document.getElementsByTagName('img') as any, {background: true}, resolve)
  }))
  return { promise, cancel }
}

export const setLoadingItem = (name: string, val: any) => {
  let { isLoaded } = globalState
  let obj = {} as Record<string, any>
  obj[name] = { loaded: val.loaded, counted: false }
  isLoaded.merge(obj)
  // console.log(isLoaded[name].get())
  if(!val.loaded) console.log(`%cadd loading: ${name}`, 'background:#000; padding:2px;')
}

export const delay = (ms: any) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const globalState = hookstate(initialState)

export default globalState