import config from './config.json'

export const $db= ()=> config.db
export const $serverPort= ()=> config.serverPort