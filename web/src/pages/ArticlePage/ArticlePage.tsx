import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: number
}
const ArticlePage = ({id}: Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      {/* <ArticleCell id={id}/> */}
      <ArticleCell id={id} rand={ Math.random()}/>
    </>
  )
}

export default ArticlePage
