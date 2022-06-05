
import type {FindArticleQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from '../Article/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindArticleQuery>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

interface Props extends CellSuccessProps<FindArticleQuery> {
  rand: number
}
export const Success = ({ article, rand }: Props) => {
  return <Article article={article} />
}
