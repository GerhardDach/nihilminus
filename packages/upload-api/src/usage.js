import { provide } from './usage/report.js'

/** @param {import('./types.js').UsageServiceContext} context */
export const createService = (context) => ({ report: provide(context) })
