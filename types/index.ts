type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[]

export type TClassName = TClass | TClass[]
export interface IFeedback {
  id: number
  description: string
  rank: number
  resident: {
    id: number
    category: {
      id: number
      name: string
    }
    slug: string
  }
  name: string
  sharh_id_url: string
  company: string
  image: string
}
